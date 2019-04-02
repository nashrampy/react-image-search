import React, {Component, PureComponent} from 'react';
import './custom.css';

export default class InputFields extends Component {
  state={
    url: '',
    title: '',
  }
  inputFieldChange(event, type) {
    const {value} = event.target;
    this.setState({
      [type]: value
    })
  }
  submitPost() {
    this.props.newPost({...this.state})
  }
  render() {
    return (
      <div className='input-container'>
        <input className='inputFieldFullWidth' placeholder="Enter URL" onChange={(event)=>this.inputFieldChange(event, 'url')}/>
        <input className='inputFieldTitle' placeholder="Title" onChange={(event)=>this.inputFieldChange(event, 'title')}/>
        <button className='resultPostButton' onClick={this.submitPost.bind(this)}>New Post</button>
      </div>
    )
  }
}

InputFields.defaultProps = {
  newPost: ({url, title}) => {}
}