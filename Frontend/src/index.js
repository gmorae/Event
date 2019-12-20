import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import HomeAdmin from './pages/Admin/HomeAdmin';
import HomeUser from './pages/Users/HomeUser';
import AllEvents from './pages/Admin/AllEvents';
import ApprovedEvents from './pages/Admin/ApprovedEvents';
import DeclineEvents from './pages/Admin/DeclineEvents';
import Community from './pages/Admin/Community';
import Category from './pages/Admin/Category';
import AllEventsUser from './pages/Users/AllEventUser';
import EventsPending from './pages/Users/EventsPending';
import RegisterEvent from './pages/Users/RegisterEvent';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { usuarioAutenticado } from './services/auth';
const PrivateRoute = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado()  ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/Admin' }} />
        )
    }
  />
);
const PrivateRouteUser = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado()  ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/User' }} />
        )
    }
  />
);
const Rotas = (

  <Router>
    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/Register" component={Register} />

      <PrivateRoute path="/Admin" component={HomeAdmin} />
      <PrivateRoute path="/AllEvents" component={AllEvents} />
      <PrivateRoute path="/ApprovedEvents" component={ApprovedEvents} />
      <PrivateRoute path="/DeclineEvents" component={DeclineEvents} />
      <PrivateRoute path="/Community" component={Community} />
      <PrivateRoute path="/Category" component={Category} />


      <PrivateRouteUser path="/User" component={HomeUser} />
      <PrivateRouteUser path="/RegisterEvent" component={RegisterEvent} />
      <PrivateRouteUser path="/MyEvents" component={AllEventsUser} />
      <PrivateRouteUser path="/EventsPending" component={EventsPending} />
      <PrivateRouteUser path="/UserEdit" component="" />
      <PrivateRouteUser path="/UserPassword" component="" />

      <Route component={NaoEncontrada} />
    </Switch>
  </Router>
)
ReactDOM.render(Rotas, document.getElementById('root'));

