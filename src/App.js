import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Display from './components/Display';
import Upload from './components/Upload';
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback';

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Display} />
      <Route exact path="/upload" component={Upload} onEnter={requireAuth} />
      <Route exact path="/callback" component={Callback} />
    </Router>
  );
}

export default App;