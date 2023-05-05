import { log } from "console";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {atom, useRecoilState, useRecoilValue, selector, useSetRecoilState} from "recoil";

const queryState = atom({
    key: "query",
    default: "",
});

const resultsState = selector({
    key: "searchResults",
    get: async ({get}) => {
        const valorDeQuery = get(queryState);
        // console.log(valorDeQuery);
        const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery);
        const data = await response.json();
        
        // hago la busqueda usando la API de mercadolibre
        return data.results;
    },
});

// mi custom hook
export function useSearchResults():any[] {
    const params = useParams();
    const [query, setQuery] = useRecoilState(queryState);

    // escucho cambios en los params con useEffects
    useEffect(() => {
        if (params.query) {
            setQuery(params.query);
        }
        
        console.log("el router me dice que query cambio");
        
    },[params]);
    
    // finalmente me engancho a los cambios de resultState
    const results = useRecoilValue(resultsState);

    return results;
}
    
