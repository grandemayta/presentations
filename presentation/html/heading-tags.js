import React, { Component } from 'react';
import { Heading, CodePane, List, ListItem } from "spectacle";

export default class HeadingTags extends Component {
  headingTagsTpl() {
    return `
      <h1>Heading tag h1</h1>
      <h2>Heading tag h1</h2>
      <h3>Heading tag h1</h3>
      <h4>Heading tag h1</h4>
      <h5>Heading tag h1</h5>
      <h6>Heading tag h1</h6>
      <h7>Heading tag h1</h7>
    `;
  }
  render() {
    return (
        <div>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Heading Tags
          </Heading>
          <CodePane lang="html" textSize={32} source={this.headingTagsTpl()}/>
        </div>
    );
  }
}
