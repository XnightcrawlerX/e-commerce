import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import Home from "./views/Home";
import Signup from "./views/Signup";
import Popular from './views/Popular'
import Shop from "./views/Shop";
import Admin from "./views/adminLogin"
import adminAddProduct from './views/adminAddProduct'
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
          <Route path="/Shop" component={Shop} />
          <Route path='/Popular' component={Popular} />
          <Route path="/About" component={About} />
          <Route path="/secret" component={Admin} />
          <Route path='/admin/addProduct' component={adminAddProduct} />
          <Footer />
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))