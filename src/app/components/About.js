import React from "react";

import { UserInfo } from "./UserInfo";
import { Weather } from "./Weather";

export const About = (props) => {
    return (
        <section id="about" className="pd_150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>About</h2>
                        <UserInfo />
                    </div>
                    <div className="col-lg-3">
                        <Weather cityId={472045}/>
                    </div>
                    <div className="col-lg-3">
                        <Weather />
                    </div>
                </div>
            </div>
        </section>
    );
}