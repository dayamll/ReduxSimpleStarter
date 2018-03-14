import React, { Component } from 'react';
import '../style.css'

class Container extends Component {
  render() {
    const { header, content } = this.props
    const hobbies = this.props.hobbies.map((hobbie,index)=>{
      return <li key={index}>{hobbie}</li>
  })

    return (
      <div>
        <header><h1>{header}</h1></header>
        <div>{content}</div>
        <h2>Hobbies</h2>
        <ul>{hobbies}</ul>
      </div>
    )
  }
}

export default Container;
