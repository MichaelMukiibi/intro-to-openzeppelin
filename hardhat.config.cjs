require("@nomicfoundation/hardhat-ethers");

const { testnetUrl, testnetApiKey, mnemonic } = require('./secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `${testnetUrl}/${testnetApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};
