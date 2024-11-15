require("@nomicfoundation/hardhat-toolbox");

const {
  PRIVATE_KEY,
} = require("./env.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
          evmVersion: "istanbul"
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
          evmVersion: "istanbul"
        }
      },
      {
        version: "0.4.19",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
          evmVersion: "default"
        }
      },
      {
        version: "0.5.12",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
          evmVersion: "default"
        }
      },
    ]
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      test: "test"
    },
    customChains: [
      {
        network: "test",
        chainId: 11822,
        urls: {
          apiURL: "https://betanet-scan.artela.network/api",
          browserURL: "https://betanet-scan.artela.network/",
        }
      }
    ]
    
  },

  networks: {
    localhost: {
      timeout: 120000,
      // url: 'http://172.29.16.1:8545',
      url: 'http://localhost:8545',
      accounts: [PRIVATE_KEY],
      chainId: 4689
    },
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: 'https://betanet-rpc1.artela.network'
      },
      chainId: 4689
    },
    artelaBetanet: {
      url: 'https://betanet-rpc1.artela.network',
      chainId: 11822,
      accounts: [PRIVATE_KEY],
    },
  },

  sourcify: {
    enabled: true
  }

};
