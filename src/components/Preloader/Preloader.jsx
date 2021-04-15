import React from 'react'
import './Preloader.css'

const Preloader = ({ loaderActive }) => {
  return (
    <div className={loaderActive ? `preloader` : 'preloader preloader_disable'}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader
