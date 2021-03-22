require("dotenv").config();
const ethers = require("ethers");
const encryptedWallet = require("./static/wallet.json");

const provider = ethers.providers.getDefaultProvider();

async function contractTest() {
  const erc20Abi = require("./static/abis/ERC20.json");
  const wethTokenAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  const wethContract = new ethers.Contract(
    wethTokenAddress,
    erc20Abi,
    provider
  );

  const wethName = await wethContract.name();

  console.log({ blockNumber, wethName });
}

contractTest();
