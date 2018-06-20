import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout';

import All from './containers/All';
import Completed from './containers/Completed';
import InCompleted from './containers/InCompleted';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/completed" component={Completed}/>
          <Route path="/incompleted" component={InCompleted}/>
          <Route path="/" exact component={All}/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
