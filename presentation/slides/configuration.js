import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class Configuration extends Component {
  template() {
    return `
      {
        entry: './src/myscript.js',
        output: {
          path: './dist',
          filename: 'name.js'
        }
      }
    `;
  }
  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Configuration
          </Heading>
          <CodePane lang="js" textSize={32} source={this.template()}/>
        </div>
    );
  }
}
