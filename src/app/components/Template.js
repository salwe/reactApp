import React from "react";

import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Template = (props) => {
    return(
        <div className="main">
            <NavBar />
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};