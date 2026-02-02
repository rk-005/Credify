🛡️ Credify — Decentralized Identity Verification using AI, Blockchain & Firebase

Credify is a decentralized electronic Know Your Customer (eKYC) platform that combines AI-powered document extraction, blockchain-based verification, and Google Firebase logging to create a secure, transparent, and auditable identity verification system.

The platform enables users to:

Upload identity documents

Extract identity data using Google Cloud Vision AI

Secure cryptographic proofs on the Ethereum blockchain

Log verification events securely using Google Firebase Firestore

This approach ensures immutability (blockchain), auditability (Firebase), and user ownership of identity data.

🌍 Live Demo (Frontend)

🔗 Live URL
👉 https://credify-eta.vercel.app?_vercel_share=YRLJtKe8R61cKCFMzC6gZC3QzACECc2a

The live demo showcases the complete UI flow:
Wallet connection → ID upload → AI extraction → Blockchain security confirmation.

⚠️ Smart contracts are developed separately and can be run locally using Hardhat.

🚀 Features

🔐 Decentralized eKYC workflow

🧾 AI-based identity document text extraction

🧠 Tamper-proof verification using blockchain hashing

🦊 MetaMask wallet integration

🔗 Ethereum smart contracts (Hardhat)

🔥 Google Firebase Firestore logging (FREE Google tool)

⚡ Modern React UI with Vite

🌐 Production deployment on Vercel

🧠 Why Firebase is Used (Google Integration)

Credify uses Google Firebase Firestore to log verification events after a successful or failed blockchain transaction.

Firebase enables:

📜 Audit logging of identity verification events

⏱️ Timestamped records using Google server timestamps

🔍 Traceability without storing sensitive identity data

☁️ A free, scalable Google-backed backend service

Only non-sensitive metadata is stored:

Wallet address

Verification status (VERIFIED / FAILED)

Timestamp

🔐 No personal document data is stored in Firebase.
Only cryptographic verification events are logged.

🧰 Tech Stack
🔗 Blockchain / Backend

Solidity

Hardhat

Ethers.js

TypeScript

🎨 Frontend

React

Vite

Ethers.js

MetaMask

🤖 AI & Google Services

Google Cloud Vision API (OCR / Text Detection)

Google Firebase Firestore (Verification Logging)

☁️ Deployment

Vercel (Frontend)

📁 Project Structure
Credify/
│
├── BlockchainEKYC/          # Smart contracts (Hardhat)
├── BlockchainEKYC-UI/       # React frontend (Vite)
│   ├── src/
│   │   ├── services/
│   │   │   └── logService.js   # Firebase logging logic
│   │   ├── firebase.js         # Firebase configuration
│   │   └── App.jsx
│
├── screenshots/             # Application & Firebase screenshots
└── README.md

⚙️ Run Locally
git clone https://github.com/rk-005/Credify.git
cd Credify

🦊 MetaMask Configuration

(Required for blockchain interaction)

Add a custom network in MetaMask:

Network Name: Hardhat Local

RPC URL: http://127.0.0.1:8545

Chain ID: 31337

Currency Symbol: ETH

🖼️ Application Screenshots
1️⃣ Landing Page – Connect Wallet

Initial entry point where users begin the verification flow.

![WhatsApp Image 2026-01-28 at 11 20 05 PM (1)](https://github.com/user-attachments/assets/53befd65-9b5b-4d72-a645-ddf891cf6b00)

2️⃣ MetaMask Wallet Connection

User authorizes Credify to connect with their wallet.

![WhatsApp Image 2026-01-28 at 11 20 05 PM (2)](https://github.com/user-attachments/assets/dec5c90e-245b-401c-89d6-e741a3f00c7e)


3️⃣ Upload Identity Document

User uploads an ID for AI-based processing.

<img width="500" height="500" alt="Screenshot 2026-02-02 123043" src="https://github.com/user-attachments/assets/93608b13-0b9e-4eaf-b2d0-e63ca1c87947" />


4️⃣ AI-Based Data Extraction (Google Vision)

Google Cloud Vision extracts identity details such as name, DOB, and ID number.

![WhatsApp Image 2026-01-28 at 11 20 05 PM (3)](https://github.com/user-attachments/assets/8be9cd62-cbdc-4d63-9c53-8aaa26d24fb6)

5️⃣ Blockchain Transaction Confirmation

User confirms the transaction in MetaMask.

![WhatsApp Image 2026-01-28 at 11 20 05 PM (4)](https://github.com/user-attachments/assets/7579ce73-5add-428c-8bde-266e52e66d25)

6️⃣ Data Secured on Blockchain

Hashed identity proof successfully anchored on-chain.

![WhatsApp Image 2026-01-28 at 11 20 05 PM](https://github.com/user-attachments/assets/dc152406-e092-4220-bd43-c777f8c6267f)


7️⃣ Firebase Firestore Verification Log (Google Tool Proof)

Verification event logged in Google Firebase Firestore with wallet address, status, and timestamp.

<img width="500" height="500" alt="firbase" src="https://github.com/user-attachments/assets/5d6634ba-0c05-4a92-afad-6c64906b34ee" />


8️⃣ Sample Identity Document Used for Demo

Example ID card used for testing AI extraction.

![id 1](https://github.com/user-attachments/assets/d6bc4e86-847b-4259-a35e-2303d2541b86)

🔐 Security & Privacy Notes

No raw identity documents are stored on-chain

No personal data is stored in Firebase

Only cryptographic hashes and verification metadata are recorded

Users retain full control via MetaMask

🏁 Conclusion

Credify demonstrates how AI, blockchain, and Google cloud tools can be combined to build a secure, decentralized, and auditable identity verification system suitable for real-world KYC use cases
