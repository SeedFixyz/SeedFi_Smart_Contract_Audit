const { ethers } = require('hardhat');

async function deploy() {
  const [owner] = await ethers.getSigners();
  const factory = await ethers.getContractAt('WELabAMMSwapFactory', '0x1907A3b6b5FB0878EC9835B074c53b742bAf900C');
  const tx = await factory.functions['INIT_CODE_PAIR_HASH']();
  console.log(tx[0]);
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
  console.log(error);
  process.exit(1);
})