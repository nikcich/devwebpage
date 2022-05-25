import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter
} from "react-router-dom";
import Routes from './components/Routes';
import React from 'react';


function App() {

  return (
    <div className="App" style={{ overflowY: 'auto' }}>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
