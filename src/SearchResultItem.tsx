import React from "react";

type SearchResultItemProps = {
    picture: string;
    title?: string;
    price: number;
};

function SearchResultItem(props: SearchResultItemProps ) {
    const {title, price, picture} = props;
    return <div className="search-result-item">
        <img src={picture} className="search-result-item__picture" alt="" /> 
        <div className="search-result-item__data">
            <h1>{title}</h1>
            <h2>{price}</h2>
        </div>
    </div>;
}

export {SearchResultItem};