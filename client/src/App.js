import React, { Component } from "react";
import Crud from "./contracts/Crud.json";
import Web3 from 'web3'
import Main from './Main'

import "./App.css";

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const networkId =  await web3.eth.net.getId()

    const crudData = Crud.networks[networkId]
    if(crudData) {
      const crud = new web3.eth.Contract(Crud.abi, crudData.address)
      this.setState({ crud })
    } else {
      window.alert('Crud contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <Main/>
    }

    return (
      <div>
        {/* Navbar */}

        <main>
          {content}
        </main>
        
      </div>
    );
  }
}

export default App;
