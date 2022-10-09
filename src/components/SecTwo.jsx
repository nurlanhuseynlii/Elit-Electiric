import React from 'react'
import Vector from '../assets/img/Vector3.png'
const SecTwo = () => {
  return (
    <div className="section-two">
                <h1>How It Work</h1>
                <div className="blocks row">
                    <div className="block-card col-sm-12 mb-5">
                        <div className="icon-1"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                        <button><img src={Vector} alt="" /></button>
                    </div>
                    <div className="block-card col-sm-12 mb-5">
                        <div className="icon-2"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                        <button><img src={Vector} alt="" /></button>
                    </div>
                    <div className="block-card col-sm-12 mb-5">
                        <div className="icon-3"></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                        <button><img src={Vector} alt="" /></button>
                    </div>
                </div>
            </div>
  )
}

export default SecTwo