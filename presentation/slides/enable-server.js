import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class EnableServer extends Component {
  template() {
    return `
    devServer: {
      contentBase: './dist',
      port: 3002,
      open: true
    } 
                .
                .
                .
                
    "scripts": {
      "live": "webpack-dev-server --mode=development",
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Enable Server
          </Heading>
          <CodePane lang="html" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
