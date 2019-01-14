import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import slides from './slides';
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
        {slides.map((FromSlide, index) => {
          return (
            <Slide key={index} transition={["zoom"]} bgColor="primary">
              <FromSlide />
            </Slide>
          );
        })}
      </Deck>
    );
  }
}
