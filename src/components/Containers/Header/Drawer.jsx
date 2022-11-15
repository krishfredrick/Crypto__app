import React, { useState } from 'react'
import Drawer from "@mui/material/Drawer"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const MobileDrawer = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="drawer__div">
      <MenuRoundedIcon
        className="drawer__link"
        style={{ fontSize: "1.5rem", margin: 0 }}
        onClick={() => setOpen(true)}
      />
       <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer">
          <a href="/">
            <p className=" drawer__link">Home</p>
          </a>
          <a href="/compare">
            <p className="drawer__link">Compare</p>
          </a>
          <a href="/dashboard">
            <p className="drawer__link">Dashboard</p>
          </a>
        </div>
      </Drawer>
      </div>
    </div>
  )
}

export default MobileDrawer;
