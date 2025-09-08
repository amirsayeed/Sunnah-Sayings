import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import AboutSunnahSayings from '../AboutSunnahSayings/AboutSunnahSayings';
import LatestQuotes from '../FreshlyAddedQuotes/LatestQuotes';
import Benefits from '../Benefits/Benefits';

const Home = () => {
    return (
        <div>
            <BannerSlider/>
            <AboutSunnahSayings/>
            <LatestQuotes/>
            <Benefits/>
        </div>
    );
};

export default Home;