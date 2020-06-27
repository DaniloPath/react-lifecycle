import React, { Component } from 'react'

export default class Users extends Component {
    constructor(){
        super()

        this.state = {
            secondsVisible: 0,
        }

        this.interval = null
    }

    componentDidMount() {
        console.log('componentDidMount Users.js')

        this.interval = setInterval(() => {
            const {secondsVisible} = this.state

            this.setState({
                secondsVisible: secondsVisible+1,
            })            
        }, 1000)
    }
    
    componentWillUnmount() {
      clearInterval(this.interval)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate no App.js")
      }
    
    render() {
        const {users} = this.props
        const {secondsVisible} = this.state
                   
        return (
            <div>
                <p>Component visiveis por {secondsVisible} segundos</p>
                {users.map((user) => {
                    const {login, name} = user
                    return <p key={login.uuid}>{name.first}</p>
                })}                               
            </div>
        )
    }
}
