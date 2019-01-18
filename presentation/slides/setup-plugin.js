import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupPlugin extends Component {
  template() {
    return `
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      })
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Setup plugin
          </Heading>
          <CodePane lang="js" textSize={30} source={this.template()}/>
        </div>
    );
  }
}
