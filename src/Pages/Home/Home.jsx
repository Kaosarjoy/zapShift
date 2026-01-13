import React from 'react';
import Banner from '../Home/Banner'
import Cards from '../Home/Cards';
import Services from '../Home/Services';
import Logo from '../Home/Logo';
import CardService from '../Home/Service/CardService';
import Hero from '../../Pages/Home/Hero/Hero';
import Reviews from '../../Pages/Home/Reviews/Reviews';
const reviewPromise = fetch('/review.json')
.then(res=>res.json())

const Home = () => {
    return (
        <div className='mb-4'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Logo></Logo>
            <CardService></CardService>
            <Hero></Hero>
            <Reviews reviewPromise={reviewPromise}></Reviews>
        </div>
    );
};

export default Home;