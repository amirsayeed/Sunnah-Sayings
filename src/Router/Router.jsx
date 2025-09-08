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
import DashboardLayout from "../layouts/DashboardLayout";
import MyQuotes from "../pages/Dashboard/MyQuotes/MyQuotes";
import QuoteDetailsPage from "../pages/QuoteDetailsPage/QuoteDetailsPage";
import UpdateQuote from "../pages/Admin/UpdateQuote";
import PrivateRoute from "../routes/PrivateRoute";
import Error from "../components/shared/Error";
import AdminRoute from "../routes/AdminRoute";
import ManageQuotes from "../pages/Dashboard/ManageQuotes/ManageQuotes";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error/>,
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
            element: <PrivateRoute><AddQuote/></PrivateRoute>
        },
        {
            path: 'quotes/:id',
            Component: QuoteDetailsPage
        },
        {
            path: 'updateQuotes/:id',
            element: <PrivateRoute><UpdateQuote/></PrivateRoute>
        },
        {
            path: 'manageQuotes',
            element: <AdminRoute><ManageQuotes/></AdminRoute>
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
  ,
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: 'myQuotes',
        element: <PrivateRoute><MyQuotes/></PrivateRoute> 
      },

      //admin only routes
      {
        path: 'manageQuotes',
        element: <AdminRoute><ManageQuotes/></AdminRoute>
      }
    ]
  }
]);