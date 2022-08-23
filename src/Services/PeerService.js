import React, { Component } from 'react'
import Peer from 'peerjs'
import ClientService from './ClientService'

export default class PeerService extends Component {

    constructor() {
        super();
        this.client = new ClientService;
        this.peer = new Peer(this.client.getClientID(), {
            port: 9000,
            path: '/chatit',
            host: '/'
        })
        this.connection = null
    }

    connect(clientID) {
        this.connection = this.peer.connect(clientID)
    }

}
