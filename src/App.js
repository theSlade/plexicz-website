import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact="private" path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}
