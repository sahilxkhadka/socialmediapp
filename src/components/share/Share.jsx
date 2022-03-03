import React from 'react'
import "./share.css"
import {permMe} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img src="assets/person/1.jpeg" alt="" className='shareProfileImg' /> */}
          <input 
            placeholder="What's the good news today?"
            className='shareInput' 
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo/ Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
