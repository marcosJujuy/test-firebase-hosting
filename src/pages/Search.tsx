import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

function Search()  {
    const params = useParams();
    useEffect(() => {
        console.log("aca se hace el fetch usando el param", params.busqueda);
    }, [params]);
    
    return (
        <div>
            Soy el Buscador
            <Link to="/">Link a Home</Link>
            <Link to="/search/termos">Link a Busqueda de Termos</Link>
        </div>
    );
}

export {Search};