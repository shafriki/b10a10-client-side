import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const campaign = useLoaderData();
    const { image, title, description,minDonation, deadline, campaignType } = campaign;

    return (
        <div className="max-w-4xl md:mx-auto my-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 mx-4 ">
            {/* Flex container to align image and text side by side */}
            <div className="flex flex-col md:flex-row">
                {/* Left Side: Image */}
                <div className="flex-shrink-0 w-full md:w-96 h-96 md:h-auto relative">
                    <img
                        src={image}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none transition-transform transform hover:scale-105"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="p-8 space-y-6 flex-grow">
                    {/* Campaign Info */}
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">{title}</h1>
                    </div>

                    <p className="text-gray-700 text-sm text-justify md:text-lg ">{description}</p>

                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Deadline:</strong> {deadline}
                    </p>
                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Campaign Type:</strong> {campaignType}
                    </p>
                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Minimum Donation:</strong> {minDonation}
                    </p>

                    {/* Donate Button */}
                    <div className="mt-6">
                        <button className="w-full btn bg-green-600 text-white hover:bg-green-700">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
