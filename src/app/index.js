import React from 'react';
import { render } from "react-dom";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { UserInfo } from "./components/UserInfo";

class App extends React.Component {
    constructor() {
        super();
        //this.user = [];
    }
    // loadData(path) {
    //     var res = [];
    //     fetch(path)
    //         .then(res => res.json())
    //         .then(res = this.helpMethod.bind(this))
    //         .catch(console.error);
    //     return res;
    // }
    // helpMethod(data) {
    //     console.log(2);
    //     console.log(data[0]);
    //     var arr = [];
    //     data.forEach((item) => {
    //         arr.push(item);
    //     });
    //     return arr;
    // }
    render(){
        // var res = this.loadData("../json/userData.json");
        // console.log(1);
        // console.log(res);
        var user = {
            author: "Salwe Breid",
            git: "http://github.com/salwe",
            vk: "https://vk.com/salwe_breid"
        };
        var stack = ["Bootstrap", "WebPack", "ReactJS"];
        return(
            <div className="main">
                <NavBar title="ReactApp"/>
                <header className="bg-primary text-white header-pd">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <h1>Welcome to React App</h1>
                                <p className="lead">I have no idea what it will be, but I hope it will not die young</p>
                                <Timer />
                            </div>
                        </div>
                    </div>
                </header>
                <section id="about" className="pd_150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>About</h2>
                                <UserInfo user={user} stack={stack}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
render(<App/>, document.getElementById("content"));