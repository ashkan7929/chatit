import React, { Component } from 'react'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar'
import Chat from './Chat'
import LocationService from '../Services/LocationService'
import PeerService from '../Services/PeerService'
export default class Main extends Component {

    constructor() {
        super();
        this.locationService = new LocationService();
        this.peerService = new PeerService();
    }

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
