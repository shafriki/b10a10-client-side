import React, { useEffect } from 'react';

const AllCampaign = () => {

    useEffect(() => {
        document.title = "All Campaign | CrowdCube";
      }, []);

    return (
        <div>
            all campaign
        </div>
    );
};

export default AllCampaign;