import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupWebpackMerge extends Component {
  template() {
    return `
      module.exports = merge(common, {
        mode: 'production',
        output: {
            path: dist,
            filename: 'bundle.app.min.js'
          }
      });
                .
                .
                .
      "scripts": {
        "live": "webpack-dev-server --config webpack.dev.js",
        "dev": "webpack-cli --config webpack.dev.js",
        "prod": "webpack-cli --config webpack.prod.js"
      }
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Setup Webpack Merge
          </Heading>
          <CodePane lang="js" textSize={22} source={this.template()}/>
        </div>
    );
  }
}
