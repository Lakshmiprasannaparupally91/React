import React, { Children, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact"
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";




const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data ={
            name: "Prasanna"
        }
        setUserName(data.name);
    }, [])
    return(
        <Provider store = {appStore}>
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Body/>,
        },
        {
        path:"/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path:"/restaurents/:resid",
        element: <RestaurentMenu/>,
    },
    {
      path:"/cart",
        element: <Cart/>,  
    }
    ],
    errorElement: <Error/>

}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)