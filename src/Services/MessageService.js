import React, { Component } from 'react'
import Peer from 'peerjs'
import ClientService from './ClientService'

export default class MessageService extends Component {

    constructor() {
        this.client = new ClientService;
        this.peer = new Peer(this.client.getClientID(), {
            port: 9000,
            path: '/messenger',
            host: '/'
        })
        this.connection = null
    }

    connect(clientID) {
        this.connection = this.peer.connect(clientID)
    }

}
