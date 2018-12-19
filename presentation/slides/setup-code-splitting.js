import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupCodeSplitting extends Component {
  template() {
    return `
      npm i -D @babel/plugin-syntax-dynamic-import
                         .
                         .
                         .
      options: {
        plugins: ['@babel/plugin-syntax-dynamic-import']
      }
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Setup Code Splitting
          </Heading>
          <CodePane lang="html" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
