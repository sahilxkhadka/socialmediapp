import React from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="assets/person/1.jpeg" alt="" className='shareProfileImg' />
          <input
            placeholder="What's the good news today?"
            className='shareInput'
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className="shareOptionText">Photo/ Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className='shareIcon' />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <div className="shareButton">
            <button>Share</button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
