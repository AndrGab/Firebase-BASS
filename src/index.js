import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import ServiceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {privateUrls} from "./utils/urlUtils";

ReactDOM.render(
    <Router>
        <Route path={privateUrls.home.path} component={App}/>
    </Router>
    , document.getElementById('root'));
ServiceWorker();