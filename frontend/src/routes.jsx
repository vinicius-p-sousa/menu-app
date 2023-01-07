import React from 'react';
import App from './App';
import Login from './pages/Login/Login.jsx';
import Admin from './pages/Admin/Admin.jsx';

const routes = [
  {
    path: '/',
    element: <h1>Hello world!</h1>,
  },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
];

export default routes;
