import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallWebpackMerge extends Component {
  template() {
    return `
      npm i -D webpack-merge
               .
               .
               .
      touch webpack.common.js
      touch webpack.dev.js
      touch webpack.prod.js
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Install Webpack Merge
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
