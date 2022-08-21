import React, { Component } from 'react'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar'
import Chat from './Chat'

export default class Main extends Component {

    render() {

        return (
            <div className='layout'>
                <Navigation />
                <Sidebar />
                <Chat />
            </div>
        )

    }

}
