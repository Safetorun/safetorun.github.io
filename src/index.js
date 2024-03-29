import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import {createBrowserHistory} from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

history.listen((location) => {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview');
});

ReactDOM.render(
    <HashRouter history={history}>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
