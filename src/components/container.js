import React, { Component } from 'react';
import './style.css'

class Container extends Component {
  render() {
    const { header, content } = this.props
    const hobbies = this.props.hobbies.map((hobbie,index)=>{
      return <li key={index}>{hobbie}</li>
  })

    return (
      <div>
        <header className='size'><h3>{header}</h3></header>
        <div>{content}</div>
        <ul>{hobbies}</ul>
      </div>
    )
  }
}

export default Container;
