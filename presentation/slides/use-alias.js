import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class UseAlias extends Component {
  template() {
    return `
      resolve: {
        alias: {
          components: path.resolve(__dirname, 'src/components')
                  .
                  .
                  .
                  
      import Greetings from 'components/greetings';
    `;
  }

  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Use alias
          </Heading>
          <CodePane lang="html" textSize={23} source={this.template()}/>
        </div>
    );
  }
}
