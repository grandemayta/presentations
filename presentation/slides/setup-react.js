import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupReact extends Component {
  template() {
    return `
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Greetings from './Greetings';
      
      ReactDOM.render(
        <h1>Welcome to my workshop!</h1>, 
        document.querySelector('#root')
      );
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Setup React
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
