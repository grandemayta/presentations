import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupLoader extends Component {
  template() {
    return `
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader:  'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
            },
            exclude: /node_modules/
          }
        ]
      }
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Setup Loader
          </Heading>
          <CodePane lang="html" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
