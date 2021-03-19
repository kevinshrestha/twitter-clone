import React from 'react'
import SidebarOption from "./SidebarOption.js"
// CSS
import "./Sidebar.css"
// Icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

// const Sidebar = () => {}
// same thing as below
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      {/* Sidebar Option  */}
      <SidebarOption Icon={HomeIcon} text="Home" active/>
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltIcon} text="List"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>

      {/* Button -> Tweet*/}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar