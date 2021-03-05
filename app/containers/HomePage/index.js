/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import Pomodoro from 'containers/Pomodoro';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Pomodoro />
    </article>
  );
}

HomePage.propTypes = {};

export default HomePage;
