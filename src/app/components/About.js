import React from "react";

import { UserInfo } from "./UserInfo";
import { Weather } from "./Weather";

export class About extends React.Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.loadData("../json/userData.json");
    }

    async loadData(path) {
        const res = await fetch(path);
        const json = await res.json();

        this.setState({ user: json})
    }

    render() {
        if (this.state.user.length) {
            const user = this.state.user[0];
            return (
                <section id="about" className="pd_150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>About</h2>
                                <UserInfo user={user}/>
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
        return (<p className="text-center">Loading...</p>);
    }
}