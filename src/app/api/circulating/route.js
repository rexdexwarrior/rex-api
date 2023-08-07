import { ethers } from "ethers"
export async function GET() {
    let retVal = 'N/A';
    // Burned Rex Token on 0x0 address //
    const provider = new ethers.providers.JsonRpcProvider('https://gwan-ssl.wandevs.org:56891/');
    const ERC20ABI = [
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address) view returns (uint256)",
    ]
    const rexContract = new ethers.Contract("0x01A2947D9E6F58572028fA9fC6A2511646345841", ERC20ABI, provider);
   // const rexContract2 = new ethers.Contract("0xC6F4465A6a521124C8e3096B62575c157999D361", ERC20ABI, provider);
    
    try {
        let ret = await rexContract.totalSupply();

        let ret2 = await rexContract.balanceOf("0x0000000000000000000000000000000000000000");

        //console.log('ret',ethers.utils.formatEther(ret))
        retVal = Number(ethers.utils.formatEther(ret)) - Number(ethers.utils.formatEther(ret2));
        
    }
    catch (error) {
        retVal = 'N/A';
    }
    finally {
        return new Response(retVal)
    }
}