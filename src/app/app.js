import React from "react";
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./layouts/login";
import Main from "../app/layouts/main";
import NotFound from "../app/components/common/not-found";
import Users from "../app/layouts/users";
import NavBar from "./components/ui/navBar";
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:usersId?/:edit?" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect from="/admin" to="/users" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}
export default App;
