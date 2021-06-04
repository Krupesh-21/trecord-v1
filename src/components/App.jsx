import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GLobalStyle from "../globalStyles";
import Routes from "../Routes";
import Header from "./navigation bar/Header";

function App() {
    return (
        <>
            <Router>
                <GLobalStyle />
                <Header />
                <Routes />
            </Router>
        </>
    );
}

export default App;