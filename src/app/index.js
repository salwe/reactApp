import React from 'react';
import { render } from "react-dom";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { AliveTimer } from "./components/AliveTimer";
import { UserInfo } from "./components/UserInfo";

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
            <header className="bg-primary text-white header-pd">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <h1>Welcome to React App</h1>
                            <p className="lead">I have no idea what it will be, but I hope it will not die young</p>
                            <AliveTimer />
                        </div>
                    </div>
                </div>
            </header>
        );
    }

    renderSection(user) {
        return (
            <section id="about" className="pd_150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>About</h2>
                            <UserInfo user={user} />
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
                    <NavBar title="ReactApp"/>
                    { this.renderHeader() }
                    { this.renderSection(user) }
                </div>
            )
        }

        return this.renderLoading();
    }
}
render(<App/>, document.getElementById("content"));