import React, { useEffect, useState } from 'react';
import Card from '../Home/Card';

const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('/work.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        
        <div>
            <h2 className='text-2xl mt-3 text-black font-bold text-start'> How it Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mb-4">
      {cards.map(c => (
        <Card key={c.id} c={c} />
      ))}
    </div>
        </div>
    );
};

export default Cards;