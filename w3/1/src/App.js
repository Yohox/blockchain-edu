import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";


const vaultAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "deposite",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "shitAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const shitAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Issue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "issue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const shitAddress = '0xc1253ee3853332AD1b0e0f6667A0B79523664276'
const vaultAddress = '0xBA3DC1a8c7e071E94623aAA69Ca94f7786a8112E'

function App() {
  const [isEthereum, setIsEthereum] = useState(false)
  const [money, setMoney] = useState(0)
  const [saveAmount, setSaveAmount] = useState(0)
  const [withdrawAmount, setWithDrawAmount] = useState(0)
  const [transferAddress, setTransferAddress] = useState(undefined)
  const [transferAmount, setTransferAmount] = useState(0)
  const provider = useRef()
  const shitContract = useRef()
  const vaultContract = useRef()
  const account = useRef()

  let refreshMoney = async () => {
    setMoney((await vaultContract.current.balance(account.current)).toString())
  }

  let init = async () => {
    let accounts = await window.ethereum.enable()
    account.current = ethers.utils.getAddress(accounts[0]);
    console.log("account: " + account.current)
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x3' }],
    });
    provider.current = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.current.getSigner()
    shitContract.current = new ethers.Contract(shitAddress, shitAbi, signer)
    vaultContract.current = new ethers.Contract(vaultAddress, vaultAbi, signer)
    shitContract.current.connect(signer)
    vaultContract.current.connect(signer)
    refreshMoney()
  }

  useEffect(() => {
    if (!window.ethereum) {
      setIsEthereum(false)
    } else {
      init()
      setIsEthereum(true)
    }
  }, [])
  return (
    isEthereum ? <div>
      <div>
        <div>
          <input value={transferAddress} onChange={(e) => setTransferAddress(e.target.value)} placeholder="输入要转账的地址" />
          <input value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} placeholder="输入要转账的总数" />
          <button onClick={async () => {
            let tx = await shitContract.current.transfer(transferAddress, transferAmount); await tx.wait()
            console.log("转账成功")
          }}>转账</button>
        </div>
        <div>在vault合约上存储的余额: {money}</div>
        <div>
          <input value={saveAmount} onChange={(e) => setSaveAmount(e.target.value)} placeholder="输入要存入的数量" />
          <button onClick={async () => {
            let tx = await shitContract.current.approve(vaultAddress, saveAmount); await tx.wait();
            console.log("approve 完成")
            tx = await vaultContract.current.deposite(saveAmount); await tx.wait()
            console.log("存入完成")
            await refreshMoney()
          }}>存入</button>
        </div>
        <div>
          <input value={withdrawAmount} onChange={(e) => setWithDrawAmount(e.target.value)} placeholder="输入要提取数量" />
          <button onClick={async () => {
            let tx = await vaultContract.current.withdraw(withdrawAmount); await tx.wait()
            await refreshMoney()
            console.log("提取完成")
          }}>提取</button>
        </div>
      </div>
    </div> : <h1>请在MetaMask环境下打开</h1>
  );
}

export default App;
