import React, { Component } from 'react';
import './style.css';
import Container from './container';


class Content extends Component {
  render() {
    return (
      <div>
        <Container
          hobbies={['leer', 'cantar', 'bailar', 'investigar']}
          header='Dayam Alisson Llerena Castro'
          content='Front-End Developer en Laboratoria.
          Cuento con poco más de un año en Programación Web,
        utilizando HTML5, CSS3, JavaScript, Node.js, Babel y Frameworks.
             Me considero extrovertida y creativa. Conocí la Programación a los 17 años
             e investigo sobre Tecnología para aprender e ir adquiriendo nuevos conocimientos.
             Uno de mis principales objetivos es convertirme en una UI Developer y mi mas grande sueño
             es ser "Diseñadora de Videos Games en la empresa mas prestigiosa de Latinoamerica".'
        />
      </div>
    );
  }
}
export default Content;