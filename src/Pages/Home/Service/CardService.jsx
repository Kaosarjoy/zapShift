import React, { useEffect, useState } from 'react';
import Card from '../../Home/Service/card';

const CardService = () => {
    const[cardsService, setCardsService]=useState([])
    useEffect(()=>{
        fetch('/card.json')
    .then(res=>res.json())
    .then(data=>setCardsService(data))
    },[])

    return (
        <div>
            {
                cardsService.map(c=>(
                    <Card key={c.id} c={c}></Card>
                ))
            }
        </div>
    );
};

export default CardService;