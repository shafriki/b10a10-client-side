import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';  // Import the Fade animation

const RunningCampaign = () => {
    const campaigns = useLoaderData(); 
    const currentDate = new Date();

    const runningCampaigns = Array.isArray(campaigns)
        ? campaigns.filter(campaign => new Date(campaign.deadline) > currentDate)
        : [];

    return (
        <div className="container mx-auto p-4 max-w-screen-xl mb-14">
            <h1 className="text-center text-2xl md:text-4xl font-bold">Running Campaign</h1>
            {runningCampaigns.length > 0 ? (
                <div className="grid mt-8 md:mt-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {runningCampaigns.slice(0, 6).map((campaign) => (
                        <Fade key={campaign._id} delay={300} triggerOnce>  {/* Apply animation */}
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">

                                <div className="relative">
                                    <img src={campaign.image || "https://via.placeholder.com/400x200"} alt={campaign.title || "Campaign Image"} className="w-full h-48 object-cover" />
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {campaign.title || "Campaign Title"}
                                    </h2>
                                    <p className="text-gray-700 text-sm mb-4">
                                        {campaign.description ? `${campaign.description.substring(0, 100)}...` : "No description available."}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold">Minimum Donation:
                                            {campaign.minDonation || "0"}
                                        </span>
                                        <button className="text-blue-500 font-semibold hover:underline">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            ) : (
                <p>No running campaigns available.</p>
            )}
        </div>
    );
};

export default RunningCampaign;
