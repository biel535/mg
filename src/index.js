// App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Appointments from './pages/Appointments';
import Opinions from './Opinie/Opinions';



const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/mg',
        element: <Home />,
      },
      {
        path: '/mg/about',
        element: <About />,
      },
      {
        path: '/mg/contact',
        element: <Contact />,
      },
      {
        path: '/mg/blog',
        element: <Blog />,
      
      },
      {
        path: '/mg/appointments',
        element: < Appointments />,
      },
      {
        path: '/mg/opinions',
        element: <Opinions />,
      },
    ],
  },
  { basename: '/mg' }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
