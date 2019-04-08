import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Router, browserHistory } from 'react-router'
import routes from './routes'

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={routes}
    />, 
    document.getElementById('root')
);

serviceWorker.unregister();