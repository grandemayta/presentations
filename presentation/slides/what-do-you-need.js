import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class WhatDoYouNeed extends Component {
  template() {
    return `
      npm i -D webpack
      npm i -D webpack-cli
      npm i -D webpack-dev-server
      npm i -D path
    `;
  }
  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            What do you Need?
          </Heading>
          <CodePane lang="js" textSize={32} source={this.template()} />
        </div>
    );
  }
}
