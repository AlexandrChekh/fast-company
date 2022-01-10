import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Main from "./components/main";
import NotFound from "./components/not-found";
import Users from "./components/users";
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:usersId?" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect from="/admin" to="/users" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}
export default App;
