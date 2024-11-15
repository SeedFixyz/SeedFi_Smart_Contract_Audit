const { ethers } = require('hardhat');

async function deploy() {
  const [ owner ] = await ethers.getSigners();

  const weth = '0x557CEB8739640B02A547a04643089acCB3b88E03';
  const feeTo = '0xF6cBd95cfb30b4c2a9770Fc01a6b199D83165dFF';
  const factory = await ethers.getContractFactory('WELabAMMSwapFactory');
  const factoryInstance = await factory.deploy(owner.address);
  await factoryInstance.deployed();

  console.log(`Factory deployed to : ${factoryInstance.address} `);

  // const router = await ethers.getContractFactory('WELabAMMSwapRouter02');
  // const routerInstance = await router.deploy(
  //   factoryInstance.address,
  //   weth,
  // )
  // await routerInstance.deployed();

  // console.log(`Router V02 deployed to :  ${routerInstance.address} `);

  const factoryContract = await ethers.getContractAt('WELabAMMSwapFactory', factoryInstance.address)
  const tx = await factoryContract.functions['setFeeTo'](feeTo)
  await tx.wait(1);
  console.log('set feeTo to ', feeTo)

  const tx1 = await factory.functions['INIT_CODE_PAIR_HASH']();
  console.log('INIT_CODE_PAIR_HASH',tx1[0]);
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
  console.log(error);
  process.exit(1);
})