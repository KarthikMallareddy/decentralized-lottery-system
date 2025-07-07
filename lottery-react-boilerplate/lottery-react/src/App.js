import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
 // ✅ Import the web3 instance you created
 import lottery from "./lottery.js"; // Import the lottery contract instance
class App extends React.Component {



    state = {
      manager: '',
      players: [],
      balance: '',
      value: '',
      message: ''
    };
    
  // Optional: State to show connected account
  

  

  async componentDidMount() {
    try {
      // Fetch connected accounts from MetaMask
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers.call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      this.setState({ manager,players });
    } catch (error) {
      console.error("MetaMask access denied or not available:", error);
    }

      

    
  }

  onSubmit = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();

        this.setState({ message: 'Waiting on transaction success...' });

        await lottery.methods.enter().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')

        });

      this.setState({message: 'You have been entered!'});

    }

    onClick =async (event) => {
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Picking a winner...' });

      await lottery.methods.pickWinner().send({
        from: accounts[0]
        });

        this.setState({ message: 'A winner has been picked!' });


      };

  render() {
  
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by: {this.state.manager}</p>
        <p>Players in the lottery: {this.state.players.length},
          competing to win some amount of {web3.utils.fromWei(this.state.balance, 'ether')}</p>
         <hr />
         <form onSubmit = {this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input 
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })} />
            
          </div>
          <button>Enter</button>
          </form> <hr />

          
          <h4>Ready to pick a winner?</h4>
          <button onClick={this.onClick}>Pick a winner</button>
          <hr/>
          
          <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
