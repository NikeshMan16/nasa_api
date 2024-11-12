import React from 'react'

export default function Sidebar(props) {

    const { handleToggleModel } = props
  return (

    <div className='sidebar'>
        <div className='bgOverlay' onClick={handleToggleModel}></div>
        <div className="sidebarContents">
        <h2>The Topview of Landscape</h2>
        <div>
            <p>Description</p>
            <p>BLah blah blah .... text </p>
        </div>
        <button onClick={handleToggleModel}>
        <i className="fa-solid fa-right-long"></i>
        </button>
        </div>
    </div>
  )
}
