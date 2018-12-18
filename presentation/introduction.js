import React, { Component } from 'react';
import { Heading, Text } from "spectacle";

export default class Introduction extends Component {
  render() {
    return (
        <div>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Development AKA Frontend
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Evolution of the Web
          </Text>
        </div>
    );
  }
}
