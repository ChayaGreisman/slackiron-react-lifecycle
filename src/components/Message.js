import React from 'react';

const Message = props => {
    console.log(props)
    return (
        <div className="message-row">
            <div>{props.author} {props.time}</div>
            <div>{props.body}</div>
        </div>
    )
}

export default Message;