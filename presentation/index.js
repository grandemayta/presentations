import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Introduction from './introduction';
import WhatDoYouNeed from './what-do-you-need';
import HeadingTags from './html/heading-tags';
import ParagraphTags from './html/paragraph-tag';
import 'normalize.css';

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Introduction/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <WhatDoYouNeed/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <HeadingTags/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <ParagraphTags/>
        </Slide>
      </Deck>
    );
  }
}
