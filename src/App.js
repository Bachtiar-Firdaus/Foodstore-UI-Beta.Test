import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import "upkit/dist/style.min.css";

import store from "./app/store";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
