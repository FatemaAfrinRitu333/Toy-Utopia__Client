import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../../Hooks/WebTitle';
import Donate from '../Donate/Donate';

const Home = () => {

    useTitle('Toy Utopia | Home')

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Donate></Donate>
        </div>
    );
};

export default Home;