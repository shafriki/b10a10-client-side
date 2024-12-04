import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard';

const AllCampaign = () => {

    const campaigns = useLoaderData();

    useEffect(() => {
        document.title = "All Campaign | CrowdCube";
      }, []);

    return (
        <div className='max-w-screen-xl mx-auto mb-10 md:mb-20'>
            <h1 className='text-center text-[#1B3D2F] text-2xl md:text-4xl font-bold my-7'>All Campaigns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {
                campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign} >
                </CampaignCard> )
            }
            </div>
        </div>
    );
};

export default AllCampaign;