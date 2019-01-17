import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class SetupAnalyser extends Component {
  template1() {
    return `
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    `;
  }

  template2() {
    return `
                    .
                    .
                    .
      plugins: [new BundleAnalyzerPlugin()]
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Setup Analyzer
          </Heading>
          <CodePane lang="js" textSize={16} source={this.template1()}/>
          <CodePane lang="js" textSize={26} source={this.template2()}/>
        </div>
    );
  }
}
