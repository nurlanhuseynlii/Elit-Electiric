import React from 'react'
import ehmirtric from '../assets/img/ehmirtrich.png';
import Vector4 from '../assets/img/Vector4.png';
import American from '../assets/img/american.png'
const SecFour = () => {
  return (
    <div className="section-four">
    <div className="row blocks">
        <div className="block col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={ ehmirtric} alt="" /></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button>
                <span>Learn More</span>
                <img src={Vector4} alt="" />
            </button>
        </div>
        <div className="block  col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={American} alt="" /></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button>
                <span>Learn More</span>
                <img src={ Vector4} alt="" />
            </button>
        </div>
        <div className="block  col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div className="img-div"><img src={ American} alt="" /></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button>
                <span>Learn More</span>
                <img src={ American} alt="" />
            </button>
        </div>
    </div>
</div>
  )
}

export default SecFour