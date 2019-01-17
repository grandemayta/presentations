import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class EnableBundleVendor extends Component {
  template() {
    return `
      optimization: {
        splitChunks: {
          chunks: 'all',
          name: 'vendor'
        },
      },
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Enable Bundle Vendor
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
