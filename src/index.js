import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyles />
        <App />
    </React.Fragment>, 
    document.getElementById('root')
);