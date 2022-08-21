import React, { Component } from 'react'

export default class ChatForm extends Component {
    render() {
        return (
            <div className="container">
                <div className="bottom">
                    <form>
                        <textarea className="form-control" placeholder="Type message..." rows="1"></textarea>
                        <button type="submit" className="btn prepend"><i data-eva="paper-plane"></i></button>
                    </form>
                </div>
            </div>
        )
    }
}
