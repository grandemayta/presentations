import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import * as fromSlides from './slides';
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
          <fromSlides.Introduction/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.WhatDoYouNeed/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.Configuration/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.Launch/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.InstallPlugin/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.SetupPlugin/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.EnableServer/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.InstallLoader/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.SetupLoader/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.SetupCodeSplitting/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <fromSlides.EnableCodeSplitting/>
        </Slide>
      </Deck>
    );
  }
}
