import React      from 'react'
import { render } from 'react-dom'
import { 
  HashRouter, Route, Switch
} from 'react-router-dom'

import 'Style/style.css';

import AppBar from  './components/AppBar';
import Footer from  './components/Footer';
import Main   from  './components/Main';

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
    <Footer />
  </div>
)

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>

  , document.getElementById('pool-pros'));
