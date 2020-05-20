import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import AdminPage from "./Pages/AdminPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/booking" component={BookingPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
