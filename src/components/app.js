import React, { Component } from 'react';
import './style.css';
import Container from './container';


class Content extends Component {
  render() {
    return (
      <div>
        <Container
          header='Dayam Alisson Llerena Castro'
          content='Dayam Alisson Llerena Castro, edad 18 años, frontend developer en laboratooria'
        />
      </div>
    );
  }
}
export default Content;