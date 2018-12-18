import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class Launch extends Component {
  template() {
    return `
      "scripts": {
        "dev": "webpack-cli --mode=development",
        "prod": "webpack-cli --mode=production"
      }
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Launch
          </Heading>
          <CodePane lang="html" textSize={30} source={this.template()}/>
        </div>
    );
  }
}
