import React, {useState, useEffect} from "react";
import { Outlet, useNavigate }  from "react-router-dom";
import { useSearchResults } from "../hooks";
import css from "./search-form.css";
import { MainButton} from "../ui/buttons";
import { TextField} from "../ui/text-field";

function SearchForm() {
    const navigate = useNavigate();
    const results = useSearchResults() || [];

    function handleSubmit(e) {
        e.preventDefault();
        const query = e.target.query.value;
        //console.log(query);
        navigate("/search/"+query, {replace:true});
    }
    return (
        <form onSubmit={handleSubmit} className={css.root}>
            <TextField name="query"/>
            <button>Buscar</button>
        </form>
    );
}

export {SearchForm};
