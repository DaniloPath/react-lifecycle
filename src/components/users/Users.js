import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        const {users} = this.props
                   
        return (
            <div>
                {users.map((user) => {
                    const {login, name} = user
                    return (
                    <li key={login.uuid}>
                        {name.first}
                    </li>
                )})}                               
            </div>
        )
    }
}
