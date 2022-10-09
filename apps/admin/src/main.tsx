import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

//React Router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { StackList } from '@santou/stack';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Sorry, an unexpected error has occurred.</p>,
    children: [
      {
        path: '/classes',
        element: <StackList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
