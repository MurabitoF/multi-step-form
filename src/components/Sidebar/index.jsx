import React from 'react'
import SidebarIcon from '../SidebarIcon'
import './sidebar.sass'

const Sidebar = ({ stage }) => {
  return (
    <section className='sidebar'>
      <div className='sidebar-icon-container'>
        <SidebarIcon label='1' isActive={stage === 1} />
        <span className='sidebar-icon-label'>
          <small>STEP 1</small>
          <h4>YOUR INFO</h4>
        </span>
      </div>
      <div className='sidebar-icon-container'>
        <SidebarIcon label='2' isActive={stage === 2} />
        <span className='sidebar-icon-label'>
          <small>STEP 2</small>
          <h4>SELECT PLAN</h4>
        </span>
      </div>
      <div className='sidebar-icon-container'>
        <SidebarIcon label='3' isActive={stage === 3} />
        <span className='sidebar-icon-label'>
          <small>STEP 3</small>
          <h4>ADD-ONS</h4>
        </span>
      </div>
      <div className='sidebar-icon-container'>
        <SidebarIcon label='4' isActive={stage === 4} />
        <span className='sidebar-icon-label'>
          <small>STEP 4</small>
          <h4>SUMMARY</h4>
        </span>
      </div>
    </section>
  )
}

export default Sidebar
