import React from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"

const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg"
                            src="/assets/person/1.jpeg" alt="" />
                        <span className="postUserName">Sahil Khadka</span>
                        <div className="postDate">5 minutes ago</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hello Yo chai first post hai sathi haru</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" className="likeIcon" alt="" />
                        <img src="assets/heart.png" className="likeIcon" alt="" />
                        <span className="postLikeCounter">36</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post