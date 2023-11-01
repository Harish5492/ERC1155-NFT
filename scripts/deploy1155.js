async function main(){
    const mnft = await ethers.getContractFactory("nft1155")
    //  Start deployment, returning a promise that resolves to a contract object
    const Mnft = await mnft.deploy()
    console.log("contract deploy at address", Mnft.target)
}
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
}); 

//  0xBF2f9E35Ea6cB7a30c279f94b1095b213AB6d20a