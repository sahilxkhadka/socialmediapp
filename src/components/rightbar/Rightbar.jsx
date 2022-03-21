import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
	return (
		<div className='rightbar'>
			<div className="rightbarWrapper">
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
						<Online user = {user} key = {user.id} />
					))}
				</ul>
			</div>
		</div>
	)
}
