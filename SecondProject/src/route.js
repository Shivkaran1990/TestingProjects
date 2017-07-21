import React from 'react';

import {App,Home,About,Contact} from './jsx/App';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default(
    <Route path="/" component={App}>
        <IndexRoute components={Home}/>
        <Route path = "about" component = {About} />
        <Route path = "contact" component = {Contact} />
    </Route>
);

