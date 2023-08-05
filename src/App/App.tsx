import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import Pet from '../components/Pet/Pet';
import Pizza from '../components/Pizza/Pizza';
import RandomActivity from '../components/RandomActivity/RandomActivity';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Layout from '../components/Layout/Layout';
import Users from '../components/Users/Users';
import User from '../components/Users/UserPage';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="pet" element={<Pet />} />
      <Route path="pizza" element={<Pizza />} />
      <Route path="randomActivity" element={<RandomActivity />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:userId" element={<User />} />
      <Route path="*" element={<ErrorPage />} />
       </Route>
    </Routes>
  );
}

export default App;
