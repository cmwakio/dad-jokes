import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Joke from './components/Joke';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Joke} />
        <Route path="/about" component={About} />
      </div>
    </Router>

  );
}

export default App;
