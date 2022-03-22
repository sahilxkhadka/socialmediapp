import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"
import { NavLink } from 'react-router-dom'


const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Sk Media</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <NavLink to = "/" >
            <span className="topbarLink">Home</span>
          </NavLink>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <NavLink to = "/profile" >
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </NavLink>
      </div>
    </div>
  )
}

export default Topbar