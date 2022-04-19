import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./route/Home";
import Details from "./route/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
