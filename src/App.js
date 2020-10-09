import React from 'react';
import classes from "./App.css";
import Sidebar from './containers/Sidebar/Sidebar';
import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
// import Profile from './containers/Profile/Profile';
import Appointments from './containers/Appointments/Appointments'

function App() {
  return (

    <Layout>
      <Sidebar />
      <div className={classes.content}>
        <Header />
        {/* <Profile/> */}
        <Appointments/>
      </div>
    </Layout>
  );
}

export default App;
