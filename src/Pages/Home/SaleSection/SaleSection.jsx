import React from 'react';
import Marquee from 'react-fast-marquee';
import Font from 'react-font';


const SaleSection = () => {
    return (
        <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d')`, backgroundSize: 'contain' }}>
            <Marquee  className='bg-gradient-to-r from-base-100/50 to-base-100/20'
                pauseOnHover
                autoFill
                speed={80}
            >
                <div className="px-8 py-14">
                    <div className='flex space-x-16 text-primary'>
                        <Font family='Bungee Inline'>
                            <p className='text-4xl m-0'>SALE</p>
                        </Font>
                        <Font family='Bungee Inline'>
                            <p className='text-4xl m-0'>30% OFF</p>
                        </Font>
                        <Font family='Bungee Inline'>
                            <p className='text-4xl m-0'>SALE</p>
                        </Font>
                        <Font family='Bungee Inline'>
                            <p className='text-4xl m-0'>30% OFF</p>
                        </Font>

                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default SaleSection;