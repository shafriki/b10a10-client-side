import React, { useEffect } from 'react';

const MyCampaign = () => {

    useEffect(() => {
        document.title = "My Campaign | CrowdCube";
      }, []);

    return (
        <div>
            my campaign
        </div>
    );
};

export default MyCampaign;