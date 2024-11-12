import React, { Children } from 'react'

export default function Footer(props) {

     const {showModel, handleToggleModel} = props


  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
            <h2>Topview of the Landscape</h2>
            <h1>APOD project</h1>
        </div>
        <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
