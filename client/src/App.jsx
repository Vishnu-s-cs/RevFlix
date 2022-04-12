import "./app.scss";
import Book from "./Book/Book";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Success from "./payment/success";
import Plan from "./pages/PayPlans/paymentPlans"
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/success"><Success/></Route>
         <Router path="/subscriptions"><Plan/></Router>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/success">
              <Success/>
               </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/book">
              <Book />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
