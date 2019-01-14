import React, { Component } from 'react';
import { Heading, CodePane } from "spectacle";

export default class InstallReact extends Component {
  template() {
    return `
      npm i -S react
      npm i -S react-dom
      npm i -D @babel/preset-react
               .
               .
               .
      use: {
        loader:  'babel-loader',
        options: {
          presets: [
            '@babel/preset-env', 
            '@babel/preset-react'
          ],
    `;
  }

  render() {
    return (
        <div>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Install React
          </Heading>
          <CodePane lang="js" textSize={26} source={this.template()}/>
        </div>
    );
  }
}
