import React from "react";
import ProfileStatus from "./status";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>
            no page exist
        </div>
    }
    return (
        <div>

            <div>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

export default ProfileInfo;