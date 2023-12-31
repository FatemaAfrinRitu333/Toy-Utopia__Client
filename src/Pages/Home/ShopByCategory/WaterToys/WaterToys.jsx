import React, { useEffect, useState } from 'react';
import ToyCard from '../ToyCard/ToyCard';

const WaterToys = () => {

    const [waterToys, setWaterToys] = useState([]);
    const [loading, setLoading] = useState(false)

    
    useEffect(()=>{
        setLoading(true)
        fetch('https://toy-utopia.onrender.com/waterToys')
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
        <div className='mt-7 grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                waterToys.map(toy => <ToyCard 
                key={toy._id}
                toy={toy}
                ></ToyCard>)
            }
        </div>
    );
};

export default WaterToys;