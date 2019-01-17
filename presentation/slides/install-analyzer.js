import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallAnalyzer extends Component {
  template() {
    return `
      npm i -D webpack-bundle-analyzer
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Install Analyzer
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
