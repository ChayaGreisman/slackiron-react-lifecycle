import React from 'react';
import './App.css';
import { Nav, MessageContainer, ChannelsContainer } from './components'
import { fetchChannels } from './requests';

class App extends React.Component {
  state = {
    channels: [],
    channelSelected: null
  }

  componentDidMount(){
    fetch('http://localhost:6001/channels')
    .then(resp=>resp.json())
    .then(channels=> this.setState({channels}))
  }

  selectChannel = (channelId) => {
    this.setState({channelSelected: channelId},
      ()=> console.log(this.state.channelSelected)
    )
  }

  selectedChannelObject = () => {
    let selected = this.state.channels.find(channel=>channel.id === this.state.channelSelected)
    return selected
  }

  render() {
    
    return (
      <div className="App">
        <Nav />
        <div className="simple-flex-row main">
          <ChannelsContainer 
            selectChannel={this.selectChannel}
            selectedChannel={this.state.channelSelected} 
            channels={this.state.channels}/>
          <MessageContainer 
            selectedChannel={this.state.channelSelected} channelObject={this.selectedChannelObject()}/>
        </div>
      </div>
    );
  }
}

export default App;
