import React from 'react';
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { About } from "./About";
import { Template } from "./Template";

class App extends React.Component {
    constructor() {
        super();
    }
    
    render(){
        return(
            <Router history={browserHistory}>
                <Template>
                    <Route path={"/about"} component={About} />
                </Template>
            </Router>
        )
    }
}
export default App;