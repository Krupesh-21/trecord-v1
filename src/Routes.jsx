import React from "react";
import { Switch, Route } from "react-router-dom";
// import Home from "./components/pages/Home Page/Home";
// import Records from "./components/pages/Records Page/Records";
// import Login from "./components/pages/Login Page/Login";
// import Register from "./components/pages/Register Page/Register";
import FormPageContainer from "./container/FormPageContainer";
import RecordsContainer from "./container/RecordsContainer";
import Record from "./components/pages/Records Page/Record";

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={FormPageContainer} />
                <Route path="/records" exact component={RecordsContainer} />
                <Route path="/records/record/:id" exact component={Record} />
                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
            </Switch>
        </>
    );
}

export default Routes;