import "./app.scss";
import Review from "./Review/review";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Plan from "./pages/PayPlans/paymentPlans"
import Book from "./Book/Book"
import Seats from "./components/seats/seats"
import BookByCity from "./Book/BookByCity";
import Reserve from "./components/reserve/Reserve";
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
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/Book">
              <Book />
            </Route>
            <Route path="/BookByCity">
              <BookByCity />
            </Route>
            <Route path="/reserve">
              <Reserve />
            </Route>
            <Route path="/seats">
              <Seats />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
