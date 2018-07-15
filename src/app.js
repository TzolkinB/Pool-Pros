import React      from 'react'
import { render } from 'react-dom'
import { 
  BrowserRouter, Route, Switch
} from 'react-router-dom'

import 'Style/style.css';

import AppBar from  './components/AppBar';
import Footer from  './components/Footer';
import Main   from  './components/Main';

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
    <Footer />
  </div>
)

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>

  , document.getElementById('pool-pros'));
