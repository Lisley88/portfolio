import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets/index";
import Error from "./pages/Error";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:id"  element={<Projets /> } />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
}  

export default AppRouter;
