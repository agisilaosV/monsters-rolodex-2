import React  from "react";

import './card.styles.css';

export const Card = ({monster}) =>{
    console.log(monster);
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
        <h1>
            {monster.name}
        </h1>
    </div>
};

