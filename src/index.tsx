import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About, Experiance, Contact, Education, Certificates } from './views';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/experiance", element: <Experiance /> },
      { path: "/about", element: <About /> },
      { path: "/certificates", element: <Certificates /> },
      { path: "/education", element: <Education /> },
      { path: "/contact", element: <Contact /> },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
