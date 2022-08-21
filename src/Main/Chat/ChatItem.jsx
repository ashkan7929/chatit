import React, { Component } from 'react'
import ChatTopBar from './ChatTopBar'
import ChatContent from './ChatContent'
import ChatForm from './ChatForm'

export default class ChatItem extends Component {
    render() {
        return (
            <div className="tab-pane fade show active" id="chat1" role="tabpanel">
                <div className="item">
                    <div className="content">
                        <ChatTopBar />
                        <ChatContent />
                        <ChatForm />
                    </div>
                </div>
            </div>
        )
    }
}
