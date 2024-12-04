import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Funding from '../components/Funding';
import Guide from '../components/Guide';
import Category from '../components/Category';

const Home = () => {

    useEffect(() => {
        document.title = "Home | CrowdCube";
      }, []);

    return (
        <div>
            <Banner></Banner>
            <Funding></Funding>
            <Category></Category>
            <Guide></Guide>
        </div>
    );
};

export default Home;