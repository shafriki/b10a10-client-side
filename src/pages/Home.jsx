import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Funding from '../components/Funding';
import Guide from '../components/Guide';
import Category from '../components/Category';
import Platform from '../components/Platform';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const campaign = useLoaderData();

    useEffect(() => {
        document.title = "Home | CrowdCube";
      }, []);

    return (
        <div>
            <Banner></Banner>
            <h3>campaign length: {campaign.length} </h3>
            <Funding></Funding>
            <Platform></Platform>
            <Category></Category>
            <Guide></Guide>
        </div>
    );
};

export default Home;