import React, { Component } from 'react'

export default class Friends extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="friends" role="tabpanel">
                <div className="top">
                    <form>
                        <input type="search" className="form-control" placeholder="Search" />
                        <button type="submit" className="btn prepend"><i data-eva="search"></i></button>
                    </form>
                </div>
                <div className="middle">
                    <h4>Friends</h4>
                    <hr />
                    <ul className="users">
                        <li>
                            <a href="#">
                                <div className="status online">
                                    <img src="assets/img/avatars/avatar-male-1.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Ham Chuwon</h5>
                                    <span>Florida, US</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status offline">
                                    <img src="assets/img/avatars/avatar-male-2.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Quincy Hensen</h5>
                                    <span>Shanghai, China</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status online">
                                    <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Mark Hog</h5>
                                    <span>Olso, Norway</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status offline">
                                    <img src="assets/img/avatars/avatar-male-4.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Sanne Viscaal</h5>
                                    <span>Helena, Montana</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status offline">
                                    <img src="assets/img/avatars/avatar-male-5.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Alex Just</h5>
                                    <span>London, UK</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status online">
                                    <img src="assets/img/avatars/avatar-male-6.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Arturo Thomas</h5>
                                    <span>Vienna, Austria</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status offline">
                                    <img src="assets/img/avatars/avatar-female-1.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Victoria Garner</h5>
                                    <span>Chisinau, Moldova</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status offline">
                                    <img src="assets/img/avatars/avatar-female-2.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Maria Baron</h5>
                                    <span>Indore, India</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="status online">
                                    <img src="assets/img/avatars/avatar-female-3.jpg" alt="avatar" />
                                    <i data-eva="radio-button-on"></i>
                                </div>
                                <div className="content">
                                    <h5>Sara Koch</h5>
                                    <span>Sofia, BG</span>
                                </div>
                                <div className="icon"><i data-eva="person"></i></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
