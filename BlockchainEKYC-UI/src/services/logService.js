import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function logVerification(wallet, status) {
  await addDoc(collection(db, "verifications"), {
    walletAddress: wallet,
    status: status,
    timestamp: serverTimestamp(),
  });
}
