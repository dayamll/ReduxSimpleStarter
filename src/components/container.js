import React, { Component } from 'react';
import './style.css'

class Container extends Component {
  render() {
    const { header, content } = this.props

    return (
      <div>
        <header><h3>{header}</h3></header>
        <div>{content}</div>
      </div>
    )
  }
}

export default Container;
