import React from 'react';
import { fetchChannelMessages } from '../requests';
import { Message } from '../components'


class MessageContainer extends React.Component {
    state = {
        messages: [],
        viewingTime: 0, // advanced deliverable
        intervalId: null // advanced deliverable
    }

    componentDidMount(){
        fetch('http://localhost:6001/messages')
        .then (resp => resp.json())
        .then (messages => this.setState({messages}))
    }

    renderChannelInfo = () => {
        return (
                this.props.selectedChannel 
                ? (<div>{this.props.channelObject.name}</div>)
                : (<div>Please select a channel</div>)
        )
    }

    render(){
        let channelMessages = this.state.messages.filter(message=> message.channelId === this.props.selectedChannel)
        return (
            <div className="messages container">
                <h2>Messages</h2>
                {this.renderChannelInfo()}
                <div>
                    {channelMessages.map(message => (
                        <Message key={message.id} {...message}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default MessageContainer;