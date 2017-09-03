import React from "react";

import { NavBar } from "./NavBar";
import { Header } from "./Header";

export const Template = (props) => {
    return(
        <div className="main">
            <NavBar />
            <Header />
            {props.children}
        </div>
    );
};