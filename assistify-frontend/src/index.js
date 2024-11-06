import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootLayout from './routes/layout/rootlayout/RootLayout';
import HomePage from './routes/homepage/HomePage';
import DashBoardLayout from './routes/layout/dashboardlayout/DashBoardLayout';
import DashBoard from './routes/dashboard/DashBoard';
import ChatPage from './routes/chatpage/ChatPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignInPage from './routes/signinpage/SignInPage';
import SignUpPage from './routes/signuppage/SignUpPage';



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/sign-in",
        element: <SignInPage />
      },
      {
        path: "/sign-up",
        element: <SignUpPage />
      },
      {
        element: <DashBoardLayout />, 
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

