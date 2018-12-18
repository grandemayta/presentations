import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallPlugin extends Component {
  template() {
    return `
      npm i -D html-webpack-plugin
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Install plugin
          </Heading>
          <CodePane lang="html" textSize={30} source={this.template()}/>
        </div>
    );
  }
}
