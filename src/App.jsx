import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
import Login from './Pages/Login';
import Jogo from './Pages/Jogo';
import './App.css';
import Config from './Pages/Config';
import Ranking from './Pages/Ranking';
import FeedBack from './Pages/FeedBack';

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={ logo } className="App-logo" alt="logo" />
    //     <p>
    //       SUA VEZ
    //     </p>
    //   </header>
    // </div>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/jogo" component={ Jogo } />
      <Route exact path="/configuração" component={ Config } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route exact path="/feedback" component={ FeedBack } />
    </Switch>
  );
}
