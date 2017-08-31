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
    loadData(path) {
        fetch(path)
            .then(res => res.json())
            .then(res => this.setState({ user: res}))
            .catch(console.error);
    }
    componentDidMount(props) {
        this.loadData("../json/userData.json");
    }
    render(){
        var user = this.state.user.length ? this.state.user[0] : [];
        return(
            <div className="main">
                <NavBar title="ReactApp"/>
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
            </div>
        )
    }
}
render(<App/>, document.getElementById("content"));