import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Error from "./pages/Error";

function AppRouter() {
    return (
        <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/projets/:id" element={<Projets />} />
            <Route path="/portfolio/*" element={<Error />} />
        </Routes>
    );
}

export default AppRouter;
