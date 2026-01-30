import "./App.css"; 
import { useState } from "react";
import { ethers } from "ethers";
import EKYC_ABI from "./abi/EKYC.json";

const EKYC_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const VISION_API_KEY = import.meta.env.VITE_GOOGLE_VISION_API_KEY;

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  /* ---------------- NETWORK ---------------- */

  const forceHardhatNetwork = async () => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x7A69" }],
    });
  };

  /* ---------------- WALLET ---------------- */

  const connectWallet = async () => {
    try {
      await forceHardhatNetwork();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
      setContract(new ethers.Contract(EKYC_ADDRESS, EKYC_ABI, signer));
      setStatus("✅ Wallet connected");
    } catch {
      setStatus("❌ Wallet connection failed");
    }
  };

  /* ---------------- GOOGLE VISION OCR ---------------- */

  const extractTextFromImage = async () => {
    if (!imageFile) {
      setStatus("❌ Please upload an image");
      return;
    }

    setStatus("🧠 Extracting text using Google AI...");

    const base64 = await toBase64(imageFile);

    const response = await fetch(
      `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requests: [
            {
              image: { content: base64 },
              features: [{ type: "TEXT_DETECTION" }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const visionResponse = data.responses?.[0];

    const text =
      visionResponse?.fullTextAnnotation?.text ||
      visionResponse?.textAnnotations?.map((t) => t.description).join("\n") ||
      "";

    if (!text.trim()) {
      const mockText = `
IDENTIFICATION CARD
Name: Geoff Sample
DOB: 12-04-1992
ID No: 1238626AB4
Issued: January 2011
Expires: December 2013
`;
      setExtractedText(mockText);
      setStatus("⚠️ Using demo OCR data (Vision API billing not enabled)");
      return;
    }

    setExtractedText(text);
    setStatus("✅ Text extracted using Google Vision");
  };

  /* ---------------- BLOCKCHAIN ---------------- */

  const registerOnBlockchain = async () => {
    if (!contract || !extractedText) {
      setStatus("❌ Missing data");
      return;
    }

    try {
      const hash = ethers.keccak256(
        ethers.toUtf8Bytes(extractedText)
      );

      setStatus("⏳ Sending hash to blockchain...");
      const tx = await contract.registerUser(hash);
      await tx.wait();

      setStatus("✅ Data secured on blockchain");
    } catch {
      setStatus("❌ Blockchain transaction failed");
    }
  };

  /* ---------------- HELPERS ---------------- */

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  /* ---------------- UI ---------------- */

  return (
  <div>
    <h1>Credify</h1>

    {/* Step Progress */}
    <div className="stepper">
      <div className={`step ${account ? "done" : "active"}`}>
        <span>1</span>
        <p>Connect Wallet</p>
      </div>

      <div className={`line ${account ? "done" : ""}`} />

      <div className={`step ${imageFile ? "done" : account ? "active" : ""}`}>
        <span>2</span>
        <p>Upload ID</p>
      </div>

      <div className={`line ${imageFile ? "done" : ""}`} />

      <div className={`step ${extractedText ? "done" : imageFile ? "active" : ""}`}>
        <span>3</span>
        <p>Extract</p>
      </div>

      <div className={`line ${extractedText ? "done" : ""}`} />

      <div
        className={`step ${
          status.includes("secured") ? "done" : extractedText ? "active" : ""
        }`}
      >
        <span>4</span>
        <p>Secure</p>
      </div>
    </div>

    <p className="status-text">AI-Powered Blockchain</p>

    {/* MAIN CARD */}
    <div className="card">
      <h2>AI Document Verification</h2>
      <p>
        Credify uses Google Cloud Vision to extract identity
        information and secure a cryptographic proof on blockchain.
      </p>

      {!account && (
  <>
    <button onClick={connectWallet}>Connect MetaMask</button>

    <p className="metamask-note">
      ⚠ Users must have MetaMask installed and set up to use Credify. Without it, blockchain functionality will not be available.
    </p>
  </>
)}

      {account && (
        <>
          <p><b>Connected:</b> {account}</p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />

          <button onClick={extractTextFromImage}>
            Extract Using Google AI
          </button>

          {extractedText && (
            <>
              <pre className="data-box">{extractedText}</pre>

              <button onClick={registerOnBlockchain}>
                Secure on Blockchain
              </button>
            </>
          )}

          {status && <div className="status">{status}</div>}
        </>
      )}
    </div>
  </div>
);

}

export default App;
