import React, { useState } from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(true)

    const handleLikes = () => {
        setIsLiked(prevstate => {
            return !prevstate
        })
        setLike(isLiked ? like + 1 : like - 1)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg"
                            src= {Users.filter(item => item.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUserName">{Users.filter(item => item.id === post.userId)[0].username}</span>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src= {post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" className="likeIcon" alt="" onClick={handleLikes} />
                        <img src="assets/heart.png" className="likeIcon" alt="" onClick={handleLikes} />
                        <span className="postLikeCounter">{like}</span>
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