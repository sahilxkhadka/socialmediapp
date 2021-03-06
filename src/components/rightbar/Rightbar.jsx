import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img className='birthdayImg' src="assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>Sandesh</b> and <b>3 other friends</b> have birthday today.
					</span>
				</div>
				<img src="assets/ad.png" alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					{Users.map(user => (
						<Online user={user} key={user.id} />
					))}
				</ul>
			</>
		)
	}
	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">Basic Info</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfokey">
							City:
						</span>
						<span className="rightbarInfoValue">
							Kathmandu
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfokey">
							From:
						</span>
						<span className="rightbarInfoValue">
							Nepal
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfokey">
							Relationship:
						</span>
						<span className="rightbarInfoValue">
							Extremely Single
						</span>
					</div>
				</div>
				<h4 className="rightbarTitle">Friends</h4>
				<div className="rightbarFollowings">
					{Users.map(user => (
						<div className="rightbarFollowing">
							<img src= {user.profilePicture} className='rightbarFollowingImg' alt="" />
							<span className="rightbarFollowingName">
								{user.username}
							</span>
						</div>
					))}
				</div>
			</>
		)
	}

	return (
		<div className='rightbar'>
			<div className="rightbarWrapper">
				{profile ?
					<ProfileRightbar />
					:
					<HomeRightbar />
				}
			</div>
		</div>
	)
}
