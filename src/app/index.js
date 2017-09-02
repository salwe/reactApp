import React from 'react';
import { render } from "react-dom";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { AliveTimer } from "./components/AliveTimer";
import { UserInfo } from "./components/UserInfo";
import { Weather } from "./components/Weather";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }
   
    componentDidMount(props) {
        this.loadData("../json/userData.json");
    }

    async loadData(path) {
        const res = await fetch(path);
        const json = await res.json();

        this.setState({ user: json})
    }

    renderHeader() {
        return (
            <Header>
                <AliveTimer />
            </Header>
        );
    }

    renderSection(user, weather) {
        return (
            <section id="about" className="pd_150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>About</h2>
                            <UserInfo user={user} />
                        </div>
                        <div className="col-lg-3">
                            <Weather cityId="472045" />
                        </div>
                        <div className="col-lg-3">
                            <Weather />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderLoading() {
        return <button className="btn btn-lg btn-primary"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>
    }

    render(){
        if (this.state.user.length) {
            const user = this.state.user[0];

            return(
                <div className="main">
                    <NavBar />
                    { this.renderHeader() }
                    { this.renderSection(user) }
                </div>
            )
        }

        return this.renderLoading();
    }
}
render(<App/>, document.getElementById("content"));