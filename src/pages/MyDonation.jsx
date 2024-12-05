import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyDonation = () => {
    const { user } = useContext(AuthContext); // Get the current user
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "My Donations | CrowdCube";

        // Fetch user-specific donations
        const fetchDonations = async () => {
            try {
                if (!user?.email) return;

                const response = await fetch(`http://localhost:5000/donations?email=${user.email}`);
                const data = await response.json();

                if (response.ok) {
                    setDonations(data);
                } else {
                    console.error(data.error);
                }
            } catch (error) {
                console.error('Error fetching donations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, [user]);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-2xl font-semibold mb-6">My Donations</h1>

            {loading ? (
                <p>Loading your donations...</p>
            ) : donations.length === 0 ? (
                <p>You have not made any donations yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                        <div 
                            key={donation._id} 
                            className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold">{donation.campaignTitle}</h2>
                            <p className="text-gray-600 mt-2"><strong>Donor Name:</strong> {donation.donorName}</p>
                            <p className="text-gray-600"><strong>Email:</strong> {donation.donorEmail}</p>
                            <p className="text-gray-600"><strong>Donation Date:</strong> {new Date(donation.donationDate || Date.now()).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;
