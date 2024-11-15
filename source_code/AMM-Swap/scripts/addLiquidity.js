const { BigNumber } = require("ethers");
const { formatEther, parseEther } = require("ethers/lib/utils");
const { ethers } = require("hardhat");

async function addLp() {
  const [owner] = await ethers.getSigners();
  const routerAddr = "0x80cB96946E15094B1Af8D20E272e4CD34f940F80";
  const routerContract = await ethers.getContractAt('WELabAMMSwapRouter02', routerAddr)
  const deadline = BigNumber.from(new Date().getTime()).div(1000).toBigInt().toString();
  
  console.log(`${owner.address} add 100 liquidityETH to ${routerAddr}`)
  
  const tx = await routerContract.functions['addLiquidityETH'](
    '0xA022F656412d4f7c277B488f1220138a516970ac',
    parseEther('1'),
    parseEther('9.5'),
    parseEther('1'),
    owner.address,
    deadline,
    {
      value: parseEther('1')
    }
  )
  await tx.wait(1)
  console.log(tx);
}

addLp()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
