import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupCleanBuild extends Component {
  template() {
    return `
      const CleanWebpackPlugin = require('clean-webpack-plugin');
                              .
                              .
                              .
      new CleanWebpackPlugin([dist]),
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Setup Clean Build
          </Heading>
          <CodePane lang="js" textSize={22} source={this.template()}/>
        </div>
    );
  }
}
