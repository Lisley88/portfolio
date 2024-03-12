import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Error from "./pages/Error";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/projets/:id" component={Projets} />
            <Route path="/*" component={Error} />
        </Routes>
    );
}

export default AppRouter;
