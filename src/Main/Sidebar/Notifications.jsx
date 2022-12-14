import React, { Component } from 'react'

export default class Notifications extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="notifications" role="tabpanel">
                <div className="top">
                    <form>
                        <input type="search" className="form-control" placeholder="Search" />
                        <button type="submit" className="btn prepend"><i data-eva="search"></i></button>
                    </form>
                </div>
                <div className="middle">
                    <h4>Notifications</h4>
                    <hr />
                    <ul className="notifications">
                        <li>
                            <div className="round"><i data-eva="person-done"></i></div>
                            <p>Quincy has joined to <strong>Squad Ghouls</strong> group.</p>
                        </li>
                        <li>
                            <div className="round"><i data-eva="lock"></i></div>
                            <p>You need change your password for security reasons.</p>
                        </li>
                        <li>
                            <div className="round"><i data-eva="attach"></i></div>
                            <p>Mark attached the file <strong>workbox.js</strong>.</p>
                        </li>
                        <li>
                            <div className="icon round"><i data-eva="gift"></i></div>
                            <p>Sara has a birthday today. Wish her all the best.</p>
                        </li>
                        <li>
                            <div className="round"><i data-eva="person"></i></div>
                            <p>Sanne has accepted your friend request.</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
