import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import "upkit/dist/style.min.css";

import store from "./app/store";
import Home from "./pages/Home";

import { listen } from "./app/listener";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import Login from "./pages/Login";

function App() {
  // panggil fungsi listen() sekali saja saat komponen selesai render pertama kali
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/register/berhasil">
            <RegisterSuccess />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
