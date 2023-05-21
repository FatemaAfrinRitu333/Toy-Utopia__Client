import React from 'react';
import Marquee from 'react-fast-marquee';
import Font from 'react-font';


const SaleSection = () => {
    return (
        <div style={{ backgroundImage: `url('https://img.freepik.com/free-vector/sport-inventory-decorative-icons-set_1284-15327.jpg?w=740&t=st=1684531328~exp=1684531928~hmac=be9e03d800aa44b173112547d5fd6c31675fc1d06924be8c16ec4d8b3c36f09d')`, backgroundSize: 'contain' }}>

            <div className="bg-gradient-to-r from-primary/50 to-neutral/50 px-8 py-12">
                <Marquee
                    pauseOnHover
                    autoFill
                    speed={80}
                >
                    <div className='flex gap-14 text-primary'>
                        <Font className='mx-4' family='Bungee Inline'>
                            <p className='text-4xl'>SALE</p>
                        </Font>
                        <Font className='mx-4' family='Bungee Inline'>
                            <p className='text-4xl'>30% OFF</p>
                        </Font>
                        <Font className='mx-4' family='Bungee Inline'>
                            <p className='text-4xl'>SALE</p>
                        </Font>
                        <Font className='mx-4' family='Bungee Inline'>
                            <p className='text-4xl'>30% OFF</p>
                        </Font>
                        
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default SaleSection;