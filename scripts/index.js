import pkg from "hardhat";

const { ethers } = pkg;

async function main() {
    // Retrieve accounts from the local node
    const accounts = (await ethers.getSigners()).map(signer => signer.address);
    console.log(accounts);
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    });