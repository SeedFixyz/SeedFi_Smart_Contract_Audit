
async function deploy() {
  const weth = '0x557CEB8739640B02A547a04643089acCB3b88E03';
  const router = await ethers.getContractFactory('WELabAMMSwapRouter02');
  const routerInstance = await router.deploy(
    '0x1907A3b6b5FB0878EC9835B074c53b742bAf900C', // factory
    weth,
  )
  await routerInstance.deployed();
  console.log('Deployed router to ', routerInstance.address);
}
deploy()
.then(() => process.exit(0))
.catch((error) => {
  console.log(error);
  process.exit(1);
})