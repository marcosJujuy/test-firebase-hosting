import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import { SearchForm } from "../SearchForm";

function Layout() {
    return (
        <div>
            <header style={{ border: "solid 2px"}}> 
                <SearchForm />
            </header>
            <Outlet></Outlet>
            <footer>Soy el footer</footer>
        </div>
    );
}

export {Layout};
