import React from "react";

function SearchForm({onSearch}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.search.value);
        if (onSearch) {
            onSearch(e.target.search.value);
        }
        
        
    };
    return <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button>Buscar</button>
    </form>;
}

export {SearchForm};