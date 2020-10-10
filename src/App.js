import React from 'react';
import classes from "./App.css";
import Sidebar from './containers/Sidebar/Sidebar';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
import { Route } from 'react-router-dom';
import Profile from './containers/Profile/Profile';
import Appointments from './containers/Appointments/Appointments';

function App() {

  return (
    <Layout>
      <Route path="/" component={Sidebar} />
      <div className={classes.content}>
        <Header />
        <Route path="/profile" exact component={Profile} />
        <Route path="/appointments" component={Appointments} />
      </div>
    </Layout>
  );
}

export default App;
