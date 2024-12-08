import React from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/Add" className="sidebar-option">
        <i className="fa-solid fa-circle-plus"></i>
          <p>Add Items</p>
        </NavLink>

        <NavLink to="/List" className="sidebar-option">
        <i className="fa-solid fa-list"></i>
          <p>List Items</p>
        </NavLink>

        <NavLink to="/Orders" className="sidebar-option">
        <i className="fa-solid fa-list-check"></i>
          <p>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
