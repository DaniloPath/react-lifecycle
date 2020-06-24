import React, { Component } from 'react';


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

  handleShowUsers = (event) => {
    this.setState({showUsers: event.target.checked})

  }
  
  render() {
    const {showUsers} = this.state

    return (
      <div>
        <div className="switch">
          <label>
            Mostrar Usuários: 
            <input type="checkbox" onChange={this.handleShowUsers} />
            <span className="lever"></span>            
          </label>
        </div>        
        <hr/>
        {showUsers && <div>Users</div>}
      </div>
    )
  }
}
