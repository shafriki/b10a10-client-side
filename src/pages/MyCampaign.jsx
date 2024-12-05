import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { MdOpenInFull, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyCampaign = () => {
    useEffect(() => {
        document.title = "My Campaign | CrowdCube";
    }, []);

    const { user } = useContext(AuthContext);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (user?.email) {
            // Fetch campaigns related to the logged-in user
            fetch(`http://localhost:5000/campaign/email/${user.email}`)
                .then(res => res.json())
                .then(data => setCampaigns(data))
                .catch(err => console.error('Error fetching campaigns:', err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message === 'Campaign deleted successfully.' || data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Campaign has been deleted.",
                                icon: "success"
                            });
                            // Update the state to reflect the deletion instantly
                            setCampaigns(campaigns.filter(campaign => campaign._id !== id));
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete campaign.",
                                icon: "error"
                            });
                        }
                    })
                    .catch(err => {
                        console.error('Error deleting campaign:', err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error"
                        });
                    });
            }
        });
    };
    

    return (
        <div>
            <h2 className="text-3xl text-center mt-8 font-bold">My Campaign List</h2>
            <div className="overflow-x-auto px-5">
                {campaigns.length === 0 ? (
                    <p className="text-center mt-4">No campaigns added yet.</p>
                ) : (
                    <table className="table bg-cyan-50 mt-5">
                        <thead>
                            <tr className="font-bold text-black text-lg">
                                <th></th>
                                <th>Campaign Name</th>
                                <th>Description</th>
                                <th>Goal</th>
                                <th>Raised</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign) => (
                                <tr key={campaign._id}>
                                    <th>1</th>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.description}</td>
                                   
                                    <td>
                                        <Link to={`/campaign/${campaign._id}`}>
                                            <button className="btn btn-outline btn-primary">
                                                <MdOpenInFull />
                                                View
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/update/${campaign._id}`}>
                                            <button className="btn btn-info">
                                                <MdEdit />
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(campaign._id)} className="btn btn-error">
                                            X Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyCampaign;
