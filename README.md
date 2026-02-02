🛡️ Credify
Decentralized Identity Verification using AI & Blockchain

Credify is a decentralized electronic Know Your Customer (eKYC) platform that combines AI-powered document extraction with blockchain-based verification.
It enables users to securely verify identity documents and optionally anchor proofs on-chain using MetaMask — ensuring transparency, immutability, and user ownership of identity data.

The project is built with a modern React (Vite) frontend, Ethereum smart contracts (Hardhat + Solidity), and MetaMask integration.
For demo and hackathon purposes, the frontend is deployed live on Vercel with a seamless UX.

🌍 Live Demo (Frontend)

🔗 Live URL:
👉 https://credify-eta.vercel.app?_vercel_share=YRLJtKe8R61cKCFMzC6gZC3QzACECc2a

The live demo showcases the full UI flow (wallet connection, ID upload, AI extraction, and blockchain-secure step).
Smart contracts are developed separately and can be run locally using Hardhat.

🚀 Features

🔐 Decentralized KYC workflow

🧾 AI-based identity document text extraction

🧠 Tamper-proof verification concept using blockchain

🦊 MetaMask wallet integration

🔗 Ethereum smart contracts (Hardhat)

⚡ Modern React UI with Vite

🌐 Production deployment on Vercel


📁 Project Structure

<img width="524" height="386" alt="image" src="https://github.com/user-attachments/assets/08c69adb-0399-4bc5-b774-27a7c0706e90" />


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

☁️ Deployment

Vercel (Frontend)

⚙️ Run Locally
git clone https://github.com/rk-005/Credify.git
cd Credify

🦊 MetaMask Configuration 
(Please note user needs to have a Metamask account for completing any type of transaction in a Blockchain.)

Add a custom network in MetaMask:

Network Name: Hardhat Local

RPC URL: http://127.0.0.1:8545

Chain ID: 31337

Currency Symbol: ETH

🖼️ Application Screenshots



1️⃣ Landing Page – Connect Wallet

Initial entry point where users begin the verification flow by connecting their MetaMask wallet.

<img width="500" height="500" alt="image 1" src="https://github.com/user-attachments/assets/c6b02a3e-cf0b-4f4f-aae4-45ef6a02408c" />



2️⃣ MetaMask Wallet Connection

User authorizes Credify to connect with their MetaMask wallet.

<img width="500" height="500" alt="2" src="https://github.com/user-attachments/assets/529dcab8-95c5-4ee9-be7c-81c46269ae06" />




3️⃣ Upload Identity Document

User uploads an identity document to be processed using AI-based extraction.

<img width="500" height="500" alt="3i" src="https://github.com/user-attachments/assets/7913eacc-df45-4a94-9b46-2da3fe2bfbf3" />




4️⃣ AI-Based Data Extraction

Google Cloud Vision extracts identity details such as name, DOB, and ID number.

<img width="500" height="500" alt="3" src="https://github.com/user-attachments/assets/3bc524cb-fba1-4d3e-b0ca-2ab236b2a686" />



5️⃣ Blockchain Transaction Confirmation

User confirms the transaction in MetaMask to securely anchor extracted data on the blockchain.

<img width="500" height="500" alt="4" src="https://github.com/user-attachments/assets/28bf2a3c-9952-4d9a-a00f-67e3eb2ba967" />



6️⃣ Data Secured on Blockchain

Verification data is successfully secured on-chain, ensuring immutability and transparency.

<img width="500" height="500" alt="5" src="https://github.com/user-attachments/assets/4b607b6d-43ed-4bb0-b0ef-1ce9f1a3b737" />




7️⃣ Sample Identity Document Used for Demo

Example ID card used to demonstrate AI-based identity extraction.

![id 1](https://github.com/user-attachments/assets/30fcab0e-4466-4954-8782-9bc10a846981)









