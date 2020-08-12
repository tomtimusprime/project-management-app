import React from 'react';

const ProfileCard = ({ name, email }) => {

    return (
        <div className="card">
            <h1>Profile Info: </h1>
            <h1 className="data"> <strong>Name: </strong>{name} </h1>
            <h1 className="data"> <strong>Email:</strong> {email} </h1>
        </div>
    )

}

export default ProfileCard;