import React, { Component } from 'react';
import { Heading, Link,  } from 'spectacle';

export default class Introduction extends Component {
  render() {
    return (
        <div>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Webpack
          </Heading>
          <Link href="https://webpack.js.org" target='_blank' textColor="tertiary" textSize={62} bold>
            Module Bundler
          </Link>
        </div>
    );
  }
}
