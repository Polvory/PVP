import React from 'react';

class LoggingButton extends React.Component {
    handleClick() {
      console.log('значение this:', this);
    }
  
    render() {
      // Такой синтаксис гарантирует, что `this` привязан к handleClick.
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Нажми на меня
        </button>
      );
    }
  }
  export default LoggingButton