// Connect to an Ethereum node (You can use Infura, Alchemy, or a local node)
const web3 = new Web3('https://mainnet.infura.io/v3/80d2b9c01ac442b1a8accec6197ca170');

async function checkBalance() {
    const address = document.getElementById('addressInput').value;
    const balanceOutput = document.getElementById('balanceOutput');

    if (!web3.utils.isAddress(address)) {
        balanceOutput.textContent = 'Invalid Ethereum address';
        return;
    }

    try {
        // Get the balance of the address
        const balance = await web3.eth.getBalance(address);

        // Convert the balance from Wei to Ether
        const balanceInEther = web3.utils.fromWei(balance, 'ether');

        balanceOutput.textContent = `Balance: ${balanceInEther} ETH`;
    } catch (error) {
        balanceOutput.textContent = 'Error checking balance';
        console.error(error);
    }
}
