import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallCleanBuild extends Component {
  template() {
    return `
      npm i -D clean-webpack-plugin
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Install Clean Build
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
