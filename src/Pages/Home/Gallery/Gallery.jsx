import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Images from './Images';

const Gallery = () => {

    const allToys = useLoaderData();
    // const {toyPicture} = allToys;
    console.log('All toys:', allToys.length)

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 ld:grid-cols-6'>
            {
                allToys.map(toy=> <Images
                key={toy._id}
                image={toy.toyPicture}
                ></Images>)
            }
        </div>
    );
};

export default Gallery;