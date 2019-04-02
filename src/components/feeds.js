import React, {Component} from 'react';
import './custom.css';

export default class feedResults extends Component {
  render() {
    const {url, title} = this.props.data;
    return (
      <div className='feedResults-container'>
        <div className='feedResults-title'>
          {title}
        </div>
        <div>
          <img src={url} className='feedResults-image'/>
        </div>
      </div>
    )
  }
}

feedResults.defaultProps = {
  data: {
    url: '',
    title: ''
  }
}