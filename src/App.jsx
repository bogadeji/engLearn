import React from 'react';
import './App.css'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import RootLayout from './layouts/RootLayout';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='user-profile' element={<Profile />} />
      <Route path='analytics' element={<Analytics/>} />
      <Route path='settings' element={<Settings />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
