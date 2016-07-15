import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './public/src/components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import videoReducer from './public/src/reducers/reducers';

let store = createStore(videoReducer) ;

render(<Provider store={ store }>
          <App />
        </Provider>, document.getElementById('app'))