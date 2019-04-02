import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFields from './components/inputs';
import Feeds from './components/feeds';

class App extends Component {
  state = {
    feedData: []
  }
  newPostData({url, title}) {
    let feedDataState = this.state.feedData;
    feedDataState.push({
      url, title
    })
    this.setState({
      feedData: feedDataState
    })
  }
  render() {
    return (
      <div>
        <div className='container'>
          <InputFields newPost={this.newPostData.bind(this)}/>
          {
            this.state.feedData.map((item, index)=>{
              return <Feeds key={index} data={item}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
