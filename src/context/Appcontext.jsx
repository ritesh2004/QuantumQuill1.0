import React, { createContext, useState } from "react";

const Appcontext = createContext();

export default Appcontext;

const AppcontextProvider = ({children}) => {
    const [openLogin,setOpenLogin] = useState("none")
    const [openSignup,setOpenSignup] = useState("none")

    let values = {
        openLogin,
        openSignup,
        setOpenLogin,
        setOpenSignup
    }
    return (
        <Appcontext.Provider value={values}>
            {children}
        </Appcontext.Provider>
    )
}

export {AppcontextProvider}