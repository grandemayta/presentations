import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallLoader extends Component {
  template() {
    return `
      npm i -D babel-loader
      npm i -D @babel/core
      npm i -D @babel/preset-env
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Install Loader
          </Heading>
          <CodePane lang="html" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
