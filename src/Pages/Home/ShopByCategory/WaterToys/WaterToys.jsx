import React, { useEffect, useState } from 'react';

const WaterToys = () => {

    const [waterToys, setWaterToys] = useState([]);
    const [loading, setLoading] = useState(false)

    
    useEffect(()=>{
        setLoading(true)
        fetch('https://toy-marketplace-server-theta.vercel.app/waterToys')
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setWaterToys(data);
            setLoading(false);
        })
    },[])
    
    if(loading){
        <div>
            <progress className="progress w-56"></progress>
        </div>
    }
    return (
        <div>
            Toys: {waterToys.length}
        </div>
    );
};

export default WaterToys;