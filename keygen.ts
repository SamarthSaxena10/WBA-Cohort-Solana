import fs from "fs";
import { Keypair } from "@solana/web3.js";

const kp = Keypair.generate();

console.log(`You've generated a new Solana wallet:
${kp.publicKey.toBase58()}
To save your wallet, copy and paste the following into a JSON file:
[${kp.secretKey}]`);

// Save keypair to JSON file
const keypairJSON = JSON.stringify({
  publicKey: kp.publicKey.toBase58(),
  secretKey: kp.secretKey.toString(),
});

fs.writeFileSync("keypair.json", keypairJSON);
