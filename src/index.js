import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from "./views/Home";
import Signup from "./views/Signup";
import Shop from "./views/Shop";
import About from "./views/About";
import Header from "./components/header";
import Footer from "./components/footer"
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))