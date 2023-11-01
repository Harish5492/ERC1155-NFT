/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia", 
  networks: {
    hardhat: {},
    sepolia: {
      url:API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan :{
    apiKey :"HW3JJVEXEIUACTN1CP7JQF6YP9U7YR53R9"
  },
  sourcify:{
    enabled :true
  },
  } 
