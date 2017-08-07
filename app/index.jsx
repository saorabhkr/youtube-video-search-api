import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application  from './components/app';

render( <AppContainer><Application/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./components/app', () => {
    render(
      <AppContainer>
        <Application/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
