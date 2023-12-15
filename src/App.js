import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand loading
// Dynamic import


const About = lazy(()=>import("./components/About"))

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    
    children :[
      {
        path:'/',
        element:<Body/>

      },
  
  {
    path:'/about',
    element:(<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>)

  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/restaurants/:resId',
    element:<RestaurantMenu />
  },
  {
    path:'/login',
    element:<LoginForm/>
  }
],
errorElement:<Error/>,
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
