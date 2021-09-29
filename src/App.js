import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";
import UserWallet from "./components/user_wallet";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect runs both after first render and after every update render.
  // combination of componentDidMount & componentDidUpdate.
  // [] as the second parameter dictates what is required for effect to be triggered.
  // a empty [] indicates update on every action.
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            DBS
          </Link>
          <div className="navbar-nav mr-auto">
            {/* inline if with logical && operator */}
            {/* true && expression = expression; false && expression = false */}
            {/* this is primarily used when you want to display one item depending on condition */}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/wallet"} className="nav-link">
                  Wallet
                </Link>
              </li>
            )}
          </div>

          {/* ternary operator is when you wanna display either or items */}
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Log Out
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        {/* mt3 stands for margin top 3px */}
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/wallet" component={UserWallet} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
