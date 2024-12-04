import React from 'react';
import Swal from 'sweetalert2';

const AddCampaign = () => {
    const handleAddCampaign = e => {
        e.preventDefault();

        const image = e.target.image.value;
        const title = e.target.title.value;
        const campaignType = e.target.campaignType.value;
        const description = e.target.description.value;
        const minDonation = e.target.minDonation.value;
        const deadline = e.target.deadline.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;

        const newCampaign = { image, title, campaignType, description, minDonation, deadline, userEmail, userName };
        console.log(newCampaign);

        // send data to the server and database
        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            });
    };

    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add New Campaign!</h1>
                <p className="py-6">
                    Create a new campaign by providing the details below.
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddCampaign} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Campaign Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Campaign Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Campaign Type</span>
                            </label>
                            <select name='campaignType' className="select select-bordered" required>
                                <option value="personal issue">Personal Issue</option>
                                <option value="startup">Startup</option>
                                <option value="business">Business</option>
                                <option value="creative ideas">Creative Ideas</option>
                            </select>
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' placeholder="Campaign Description" className="input input-bordered" required></textarea>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Minimum Donation Amount</span>
                            </label>
                            <input type="number" name='minDonation' placeholder="Minimum Donation Amount" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name='deadline' className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" name='userEmail' placeholder="User Email" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form fourth row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name='image' placeholder="Image URL" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCampaign;
