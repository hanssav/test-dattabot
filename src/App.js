import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Switch>
        </Router>
    );
}

export default App;
