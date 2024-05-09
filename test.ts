import { Keypair } from "@solana/web3.js";

// Replace 'privateKeyUintArray' with your actual Uint8Array containing the private key
const privateKeyUintArray = new Uint8Array([
  135, 59, 160, 9, 74, 188, 184, 126, 30, 151, 142, 146, 138, 8, 206, 1, 224,
  75, 55, 198, 142, 245, 3, 83, 3, 174, 73, 209, 105, 231, 216, 250, 157, 63, 0,
  205, 114, 28, 124, 200, 25, 237, 180, 248, 54, 43, 230, 140, 131, 242, 17, 71,
  16, 194, 255, 210, 21, 160, 70, 197, 78, 88, 187, 255,
]);

// Create a keypair from the private key Uint8Array
const keypair = Keypair.fromSecretKey(privateKeyUintArray);

// Get the public key associated with the keypair
const publicKey = keypair.publicKey;

// Get the private key in base64 encoded format
const privateKeyBase64 = Buffer.from(privateKeyUintArray).toString("base64");

console.log("Public key:", publicKey.toBase58());
console.log("Private key (base64):", privateKeyBase64);
