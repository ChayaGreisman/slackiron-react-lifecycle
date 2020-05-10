import React from 'react';
import { fetchChannelMessages } from '../requests';
import { Message } from '../components'


class MessageContainer extends React.Component {
    state = {
        messages: [],
        viewingTime: 0, // advanced deliverable
        intervalId: null // advanced deliverable
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.selectedChannel 
            && (!prevProps.selectedChannel
            || prevProps.selectedChannel.id !== this.props.selectedChannel.id)){
            fetchChannelMessages(this.props.selectedChannel.id)
            .then(messages => this.setState({ messages }))
        }
    }

    render(){
        console.log(this.state)
        return (
            <div className="messages container">
                <h2>Messages</h2>
                <div>Channel Info goes here</div>
                <div>
                    {this.state.messages.map(message => (
                        <Message key={message.id} {...message}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default MessageContainer;