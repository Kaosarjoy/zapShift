import React from 'react';
import Banner from '../Home/Banner'
import Cards from '../Home/Cards';
import Services from '../Home/Services';
import Logo from '../Home/Logo';

const Home = () => {
    return (
        <div className='mb-4'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Logo></Logo>
        </div>
    );
};

export default Home;