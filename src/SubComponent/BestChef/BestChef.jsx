import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const BestChef = () => {
    const [chefs, setChefs] = useState([])
    useEffect(()=>{
        fetch('https://food-lover-xi.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div>
            {
                chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </div>
    );
};

export default BestChef;