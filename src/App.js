import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import CalculatorPage from './components/CalculatorPage';
import Home from './components/Home';
import Quote from './components/Quote';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/calculator',
    element: <CalculatorPage />,
  },
  {
    path: '/quote',
    element: <Quote />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
