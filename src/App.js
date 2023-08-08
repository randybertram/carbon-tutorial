import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Theme } from '@carbon/react';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
