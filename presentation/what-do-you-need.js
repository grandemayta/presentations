import React, { Component } from 'react';
import { Heading, Text, List, ListItem } from "spectacle";

export default class WhatDoYouNeed extends Component {
  render() {
    return (
        <div>
          <Heading size={3} lineHeight={1} textColor="secondary">
            What do you Need?
          </Heading>
          <List>
            <ListItem>Html</ListItem>
            <ListItem>Css</ListItem>
            <ListItem>Javascript</ListItem>
          </List>
        </div>
    );
  }
}
