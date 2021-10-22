import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostSelected from "./Components/Context/PostDataContext";
import Login from "./Components/Login/Login";
import error404 from "./Components/404/error404";
import Dashboard from "./Components/Dashboard/Dashboard";
import React, { useContext, Fragment } from "react";
import Post from "./Components/posteos/Post";
import UserContext from "./Components/Context/UserContext";
import "./style.scss";
import Navbar from "./Components/Navbar";
import CrearEditar from "./Components/CRUD/CrearEditar";
function App() {
  const data = useContext(UserContext);
  return (
    <Fragment>
      <PostSelected>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/crear" component={CrearEditar} />
            <Route exact path="/editar" component={CrearEditar} />

            <Route path="/*" component={error404}></Route>
          </Switch>
        </Router>
      </PostSelected>
    </Fragment>
  );
}

export default App;
