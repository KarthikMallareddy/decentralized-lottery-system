# 🎰 Decentralized Lottery System (Ethereum + React)

This is a full-stack decentralized application (DApp) that implements a **lottery system** on the **Ethereum blockchain**, allowing users to enter with Ether and a manager to randomly pick a winner.

## 🛠 Tech Stack

- **Solidity** – Smart contract development
- **React.js** – Frontend UI
- **Web3.js** – Blockchain interaction
- **Ganache** – Local Ethereum blockchain
- **Truffle** or **Remix IDE** – Contract testing and deployment

---

## 🚀 Features

- Anyone can **enter the lottery** by sending ETH (min amount required).
- The **manager** can pick a **random winner**.
- Real-time **transaction status** and **UI updates**.
- Contract is deployed and tested on **local / test network**.

---

## 📁 Project Structure

```

Directory structure:
└── karthikmallareddy-decentralized-lottery-system/
    ├── lottery-react-boilerplate/
    │   └── lottery-react/
    │       ├── README.md
    │       ├── package.json
    │       ├── public/
    │       │   ├── index.html
    │       │   ├── manifest.json
    │       │   └── robots.txt
    │       └── src/
    │           ├── App.css
    │           ├── App.js
    │           ├── App.test.js
    │           ├── index.css
    │           ├── index.js
    │           ├── lottery.js
    │           ├── reportWebVitals.js
    │           ├── setupTests.js
    │           └── web3.js
    └── lottery-updated/
        └── lottery/
            ├── compile.js
            ├── deploy.js
            ├── package.json
            ├── contracts/
            │   └── Lottery.sol
            └── test/
                └── Lottery.test.js


````

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/KarthikMallareddy/decentralized-lottery-system.git
cd decentralized-lottery-system/lottery-react-boilerplate/lottery-react
````

### 2. Install dependencies

```bash
npm install
```

### 3. Compile & Deploy the Contract (Optional if using Remix)

If using **Truffle/Ganache**:

```bash
truffle compile
truffle migrate
```

Or use **Remix** to compile/deploy `Lottery.sol` and copy the ABI and deployed address into your React frontend.

### 4. Start the frontend

```bash
npm start
```

The app will run on `http://localhost:3000`.

---

## 🔐 Metamask Setup

* Install [Metamask](https://metamask.io/)
* Import or create an account on the **same network** as the deployed contract
* Ensure you have enough test ETH (via faucet if using testnets)

---

## 📄 Smart Contract Overview

```solidity
address public manager;
address[] public players;

function enter() public payable;
function pickWinner() public restricted;
```

* `enter()`: Lets a user participate in the lottery.
* `pickWinner()`: Picks a random winner (only the manager can call).

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/8d40f545-f89c-4c68-ba8c-6e2bc54dfcd5)

![image](https://github.com/user-attachments/assets/aba0d8fd-5dbc-401e-b859-d052bd3b930a)

---

## ✅ TODO / Improvements

* Add unit tests
* Support for multiple winners
* Integrate with real Chainlink VRF for randomness
* Deploy on Ethereum testnet (e.g., Sepolia or Goerli)

---

## 🧠 License

This project is open source under the [MIT License](LICENSE).

---

## 🙌 Credits

Built by [Karthik Mallareddy](https://github.com/KarthikMallareddy)
