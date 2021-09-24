import React from 'react';
import './Slide.css';

export default ({ title, items }) => {
    console.log(items, 'dentro')
    return (

        <div id="slide">

            <h2>{title}</h2>
            <div id="listra">{items.results.map((item, key) => (
                <img id="img"src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />
                
                
            ))}</div>
        </div>
    )
}

