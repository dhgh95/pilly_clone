import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import DetailView from "./pages/DetailView/DetailView";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import MyPilly from "./pages/MyPilly/MyPilly";
import Products from "./pages/Products/Products";
import Polls from "./pages/Polls/Polls";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Review from "./pages/Review/Review";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/product/detail/:id" component={DetailView} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/mypilly" component={MyPilly} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/results" component={ResultsPage} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
