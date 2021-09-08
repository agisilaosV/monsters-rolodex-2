import React from 'react';
import './card-list.styles.css';

import { Card } from '../card/card.component';

export const CardList = props => {
   console.log(props)
   return (<div className='card-list'>
      {
         props.monsters.map(monster=>(
           <div>
              <h2 className='card-container' key={monster.id}>
              <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
                  {monster.name} 
                  <p>{monster.email}</p>
                  </h2>
                  
           </div>
         //   <Card key= {monster.id}> monster={monster} </Card>
         ))
       }
   </div>)
} 