import React from 'react';
import ReactDOM from 'react-dom';
//import App from './src/jsx/App.jsx';
import { Router,  Link, browserHistory, IndexRoute  } from 'react-router'
import routes from './src/route';
/*
ReactDOM.render(<App/>,document.getElementById('app'))*/

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'))