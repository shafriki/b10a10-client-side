import React from 'react';
import Banner from '../components/Banner';
import Funding from '../components/Funding';
import Guide from '../components/Guide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Funding></Funding>
            <Guide></Guide>
        </div>
    );
};

export default Home;