import React from 'react';

const ChannelsContainer = props => {

    const renderChannelRow = (channel) => {
        const { id, name } = channel
        const { selectChannel, selectedChannel } = props;
        return (
            <div 
                className={selectedChannel === id ? 'active channel' : 'channel'}
                key={id} 
                onClick={() => props.selectChannel(id)}>
                    # {name}
            </div>
        )
    }

    let starred = props.channels.filter(channel => channel.starred)
    let general = props.channels.filter(channel=> !channel.starred)
   
    return (
        <div className="channels container">
            <h2>Channels</h2>
            {/**ADVANCED: render into starred OR general below */}
            <h3>Starred</h3>
            {starred.map(channel=>renderChannelRow(channel))}
            <h3>General</h3>
            {general.map(channel=>renderChannelRow(channel))}
            
        </div>
    )
}

export default ChannelsContainer;