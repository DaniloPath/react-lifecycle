import React, { Component } from 'react'
import User from './User'

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
                <ul>
                    <li>Component visiveis por {secondsVisible} segundos</li>
                    {users.map((user) => {  
                        const {login, name, picture} = user                      
                        return <li key={login.uuid}><User user={user} /></li>                       
                        })}                     
                </ul>
            </div>            
        )
    }
}
