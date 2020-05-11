# SlackIron Lifecycle Lab!
Welcome to SlackIron! You guessed it... it's something like a Slack clone. In this app, you'll have to fetch all the channels and render them. When a user clicks on a given channel, the messages need to populate and when they select a new channel, the messages need to update. Fairly straightforward, hopefully. You have a giant hint here! *MOST* of what you'll be expected to implement will require lifecycle methods. *MOST* but potentially not all. Be meticulous in planning out how you will implement the features. 

Notice in this lab, that there are `MVP` and `Stretch` deliverables. In Mod5, you'll be tasked with choosing what is Minimum Viable Product `MVP` or Stretch for your app. Sometimes tasks are included in Stretch that are easy - but are not essential to the use case of the app. Deliverables are split in this way for this lab to start your adjustment to that split. 

Remember, decide based on the feature/deliverable what code needs to be written or changed and then go do it! Play around with the code and test often. 

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.

![alt text][all_deliverables]

[all_deliverables]: ./public/SlackironAll.gif "All Deliverables"

## Skills and Concepts to Practice
- Lifecycle Methods including `componentDidMount`, `componentDidUpdate`, and  `componentWillUnmount` 
- Choosing what to represent in state and where
- Defining methods, passing them as props, and invoking them
- Using intervals

## Setup
After cloning down the project:
- Run `git checkout -b yourname` in your terminal to create your own branch
- Run `npm install` in your terminal
- Run `npm start` and a JSON server will spin up a mock back-end API and you can access the data at `http://localhost:6001/channels`. Your react application will also start, on port `6002`. The response should contain an array of objects that are structured as follows:
```
[{
"id": 1,
"name": "Tiger Lovers Unite",
"starred": false
},
{
"id": 2,
"name": "Flatiron Sayings",
"starred": true
},
{
"id": 3,
"name": "Absolute Nonsense",
"starred": true
}]
```
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App`
- `Nav`
- `ChannelsContainer`
- `MessageContainer`
- `Message`


### Additional Files
- `db.json` stores the data for our json-server. Check it out to make sure you know the format of the data.  


## Deliverables 
### MVP Deliverables
- Upon page load, the user should see all channels in the left side panel
- When a user clicks on a channel the first time, they should see all the messages populated in the message container and the channel info at the top of the message container. 
- When a user selects a new channel, all previous messages should disappear and new messages and channel info should appear. 

### Stretch Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. Check out the gif below for how it should look. 
- In the channels list, create separate sections for `Starred` channels and `General` Channels.
- Include a timer in the channel info of `MessageContainer` that says someting like `Been listening for {seconds} seconds`. It should update every second and start back at zero when you switch channels


## Resources
- [Lifecycle Docs](https://reactjs.org/docs/state-and-lifecycle.html)
- [Lifecycle Visualizer](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


