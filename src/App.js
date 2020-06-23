import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      user: [],
      showUsers: false,
    }
  }

  async componentDidMount() {
    const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10')

    const json = await res.json()

    console.log(json)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate no App.js")
  }

  componentDidWillUmMount() {
    console.log("componentDidWillUmMount no App.js")
  }
  
  render() {
    return <ProjetoBase />;
  }
}
