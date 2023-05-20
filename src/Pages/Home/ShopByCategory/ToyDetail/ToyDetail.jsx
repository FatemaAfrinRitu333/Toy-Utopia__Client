import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../Hooks/WebTitle';

const ToyDetail = () => {
    
    const { toyName, toyPicture, price, rating, details } = useLoaderData();

    useTitle(`Toy Utopia | ${toyName}`);

    return (
        <div className='container mx-auto my-9'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={toyPicture}alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;