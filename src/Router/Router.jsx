import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Quotes from "../pages/QuotesList/Quotes";
import AddQuote from "../pages/AddQuote/AddQuote";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'quotesList',
            Component: Quotes
        },
        {
            path: 'addQuote',
            Component: AddQuote
        }
    ]
  },
    {
    path: '/',
    Component: AuthLayout,
    errorElement: <Error/>,
    children: [
        {
            path: 'login',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        }
    ]
  }
]);