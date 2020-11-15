import React from 'react';
import "./SidebarOption.css";


function SidebarOption({ active, text, Icon }) {
  //string interpolation. if youre active, and
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}> 
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption;

