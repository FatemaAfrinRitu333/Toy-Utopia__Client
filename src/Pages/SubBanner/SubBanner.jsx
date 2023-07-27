import React from 'react';

const SubBanner = ({subHeader}) => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d")`, backgroundSize: 'contain' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center">
                    <div className="rounded-md p-9">
                        <h2 className='text-3xl font-bold font-mono uppercase text-white'>
                            {subHeader}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;