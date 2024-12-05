import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Details = () => {
    const campaign = useLoaderData();
    const { image, title, description, minDonation, deadline, campaignType } = campaign;
    const { user } = useContext(AuthContext);

    const handleDonate = async () => {
        if (!user) {
            alert("Please log in to donate.");
            return;
        }

        const donationData = {
            campaignId: campaign._id,
            campaignTitle: title,
            donorEmail: user.email,
            donorName: user.displayName || "Anonymous",
        };

        try {
            const response = await fetch('http://localhost:5000/donated', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donationData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Thank you for your donation!");
            } else {
                console.error(result);
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Donation Error:", error);
            alert("Unable to process donation.");
        }
    };

    return (
        <div className="max-w-4xl md:mx-auto my-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 mx-4">
            <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 w-full md:w-96 h-96 md:h-auto relative">
                    <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none transition-transform transform hover:scale-105" />
                </div>

                <div className="p-8 space-y-6 flex-grow">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">{title}</h1>
                    </div>

                    <p className="text-gray-700 text-sm text-justify md:text-lg">{description}</p>

                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Deadline:</strong> {deadline}
                    </p>

                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Campaign Type:</strong> {campaignType}
                    </p>

                    <p className="text-sm md:text-lg text-gray-600">
                        <strong>Minimum Donation:</strong> {minDonation}
                    </p>

                    <div className="mt-6">
                        <button onClick={handleDonate} className="w-full btn bg-green-600 text-white hover:bg-green-700" >
                        Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
