import React from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg"
                            src= {post.photo} alt="" />
                        <span className="postUserName">{post.username}</span>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" className="likeIcon" alt="" />
                        <img src="assets/heart.png" className="likeIcon" alt="" />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post