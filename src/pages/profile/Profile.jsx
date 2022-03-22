import React from "react";
import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                            <img src="assets/post/3.jpeg" className="profileCoverImg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Sahil Khadka</h4>
                            <p className="profileInfoDesc">Fooled by love.</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile