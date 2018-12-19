import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class EnableCodeSplitting extends Component {
  template() {
    return `
      import('./script2').then(() => {
        console.log('Script2 loaded');  
      }).catch(() => {
          console.log('Opsss!');  
      })
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Enable Code Splitting
          </Heading>
          <CodePane lang="html" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
