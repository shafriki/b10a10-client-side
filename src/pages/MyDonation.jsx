import React, { useEffect } from 'react';

const MyDonation = () => {

    useEffect(() => {
        document.title = "My Donations | CrowdCube";
      }, []);

    return (
        <div>
            my all donations
        </div>
    );
};

export default MyDonation;