import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class PerformanceBudget extends Component {
  template() {
    return `
      performance: {
        maxAssetSize: 100000,
        maxEntrypointSize: 300000,
        hints: 'error'
      },
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Performance Budget
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
