import React from 'react';
import { render } from "react-dom";

import { UserInfo } from "./components/UserInfo";

class App extends React.Component {
    render(){
        var user = {
            author: "Salwe Breid",
            git: "http://github.com/salwe",
            vk: "https://vk.com/salwe_breid"
        };
        var stack = ["Bootstrap", "WebPack", "ReactJS"];
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>About</h2>
                        <UserInfo user={user} stack={stack}>
                            
                        </UserInfo>
                    </div>
                </div>
            </div>
        )
    }
}
render(<App/>, document.getElementById("content"));