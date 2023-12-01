import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Authcontext from "../context/Authcontext";
import { Home } from "../pages/Homepage/Home";
import toast from "react-hot-toast";
import Appcontext from "../context/Appcontext";


export const Privateroute = ({ children }) => {
    const { isAuthenticated } = useContext(Authcontext);
    const {setOpenLogin} = useContext(Appcontext)

    return (
        isAuthenticated ? <Outlet/> : setOpenLogin("block") || <Home/>
    )
}