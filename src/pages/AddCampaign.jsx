import React, { useEffect } from 'react';

const AddCampaign = () => {

    useEffect(() => {
        document.title = "Add Campaign | CrowdCube";
      }, []);

    return (
        <div>
            add new campaign
        </div>
    );
};

export default AddCampaign;