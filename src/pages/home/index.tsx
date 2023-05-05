import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
// Importamos el contexto y ya no usuamos el hook
// import {useUsername} from "../hook";

function Home()  {
    console.log("soy el home, estoy recalculando");
    
    return (
        <div>Aca realiza tu busqueda</div>
    );
}

export {Home};