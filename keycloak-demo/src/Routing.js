import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import Users from './Users';

const Routing = () => {
  return (
    <BrowserRouter>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route path="/users" element={<Users />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
