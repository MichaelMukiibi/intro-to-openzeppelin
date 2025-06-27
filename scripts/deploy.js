import pkg from 'hardhat';

const { ethers } = pkg;

// scripts.deploy.js
async function main() {
    // Get contract to deploy
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');

    const box = await Box.deploy();
    await box.waitForDeployment();
    console.log('Box deployed to:', await box.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    })