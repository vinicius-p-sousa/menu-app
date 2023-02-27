import React from 'react';
// import App from './App';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';

export const routes = [
  { path: '*', element: <Error /> },
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
];

export const error = Error;
