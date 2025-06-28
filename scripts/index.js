import pkg from "hardhat";

const { ethers } = pkg;

async function main() {
    // Set uo an ethers contract, representing our deployed Box instance
    const address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    const Box = await ethers.getContractFactory('Box');
    const box = Box.attach(address);

    // Retrieve the current value of the box
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        process.exit(1);
    });