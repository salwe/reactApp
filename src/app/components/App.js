import React from 'react';
import { Switch, Route } from "react-router-dom";


import { Template } from "./Template";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { UserInfo } from "./UserInfo";

class App extends React.Component {
    render(){
        return(
            <Template>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={UserInfo} />
                </Switch>
            </Template>
        )
    }
}
export default App;