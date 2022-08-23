import React, { Component } from 'react'

export default class ChatContent extends Component {
    render() {
        return (
            <div className="middle" id="scroll">
                <div className="container">
                    <ul>
                        <li>
                            <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <span>07:30am</span>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <p>Many desktop publishing packages.</p>
                                    </div>
                                </div>
                                <span>11:56am</span>
                            </div>
                        </li>
                        <li>
                            <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <div className="attachment">
                                            <a href="#/" className="round"><i data-eva="file-text"></i></a>
                                            <div className="meta">
                                                <a href="#/"><h5>build-plugins.js</h5></a>
                                                <span>3kb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span>01:03pm</span>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <p>It was popularised in the 1960s.</p>
                                    </div>
                                </div>
                                <span>05:42pm</span>
                            </div>
                        </li>
                        <li>
                            <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <p>It is a long established fact that a reader will be distracted.</p>
                                    </div>
                                </div>
                                <span>08:20pm</span>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <div className="message">
                                    <div className="bubble">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                    </div>
                                </div>
                                <span>10:15pm <i data-eva="done-all"></i></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
