import React, { Component } from 'react';


class Arrow extends Component {
  render() {
    return(
      <a href="#intro">
        <svg className={`icon ${this.props.className}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>arrow-down</title>
          <path d="M19.7 11.3c-0.4-0.4-1-0.4-1.4 0l-5.3 5.3v-11.6c0-0.6-0.4-1-1-1s-1 0.4-1 1v11.6l-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l7 7c0.1 0.1 0.2 0.2 0.3 0.2 0.1 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.1-0.1 0.2-0.1 0.3-0.2l7-7c0.4-0.4 0.4-1 0-1.4z"></path>
        </svg>
      </a>
    )
  }
}

export default Arrow;
