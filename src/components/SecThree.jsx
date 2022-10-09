import React from 'react'
import Vector4 from '../assets/img/Vector4.png'

const SecThree = () => {
  return (
    <div className="section-three">
    <div className="left">
        <div className="left-content">
            <div className="inside">
            <h1>What We Do ?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button>
                <span>Learn More</span>
                <img src={Vector4} alt="" />
            </button>
        </div>
        </div>
    </div>
    <div className="right"></div>
</div>
  )
}

export default SecThree