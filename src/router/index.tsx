import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/home";
import {Layout} from "../components/layout";
import { SearchResults } from "../pages/SearchResults";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout  />} >
                <Route index element={<Home  />} />
                <Route path="/search/:query" element={<SearchResults />} />
            </Route>
        </Routes>
    );
}

export {AppRoutes};