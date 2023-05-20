import React from 'react';

const Images = ({image}) => {
    return (
        <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
        ></div>
    );
};

export default Images;