import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet, useSearchParams } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import userContext from "./utils/userContext";
import { Provider } from "react-redux"; //Acts as bridge between store and app
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
// Dynamic import


const About = lazy(() => import("./components/About"))


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Pranav Bhargav",
    }
    setUserName(data.name)

  }, [])

  return (
    //Providing store to the app
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Body />

      },

      {
        path: '/about',
        element: (<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>)

      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/login',
        element: <LoginForm />
      },
      {
        path: '/cart',
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
