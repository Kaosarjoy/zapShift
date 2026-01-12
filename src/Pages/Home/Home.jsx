import React from 'react';
import Banner from '../Home/Banner'
import Cards from '../Home/Cards';
import Services from '../Home/Services';

const Home = () => {
    return (
        <div className='mb-4'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
        </div>
    );
};

export default Home;