require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const mnemonic = fs.readFileSync('.secret').toString().trim()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    dev: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/a3c43ec34ab4448dbb930efdafadbcfe`,
      accounts: [mnemonic],
      chainId: 3
    }
  },
};
