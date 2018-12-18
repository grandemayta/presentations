import React, { Component } from 'react';
import { Heading, CodePane, Text } from "spectacle";

export default class ParagraphTags extends Component {
  tagsTpl() {
    return `
      <p>I am a Paragraph tag</p>
    `;
  }
  render() {
    return (
        <div>
          <Heading size={3} lineHeight={1} textColor="secondary">
            Paragraph Tag
          </Heading>
          <CodePane lang="html" textSize={32} source={this.tagsTpl()}/>
        </div>
    );
  }
}
