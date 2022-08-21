import React, { Component } from 'react'

export default class ChatTopBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="top">
                    <div className="headline">
                        <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
                        <div className="content">
                            <h5>Quincy Hensen</h5>
                            <span>Away</span>
                        </div>
                    </div>
                    <ul>
                        <li><button type="button" className="btn"><i data-eva="video" data-eva-animation="pulse"></i></button></li>
                        <li><button type="button" className="btn"><i data-eva="phone" data-eva-animation="pulse"></i></button></li>
                        <li><button type="button" className="btn" data-toggle="modal" data-target="#compose"><i data-eva="person-add" data-eva-animation="pulse"></i></button></li>
                        <li><button type="button" className="btn" data-utility="open"><i data-eva="info" data-eva-animation="pulse"></i></button></li>
                        <li><button type="button" className="btn round" data-chat="open"><i data-eva="arrow-ios-back"></i></button></li>
                        <li><button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-eva="more-vertical" data-eva-animation="pulse"></i></button>
                            <div className="dropdown-menu">
                                <button type="button" className="dropdown-item"><i data-eva="video"></i>Video call</button>
                                <button type="button" className="dropdown-item"><i data-eva="phone"></i>Voice call</button>
                                <button type="button" className="dropdown-item" data-toggle="modal" data-target="#compose"><i data-eva="person-add"></i>Add people</button>
                                <button type="button" className="dropdown-item" data-utility="open"><i data-eva="info"></i>Information</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
