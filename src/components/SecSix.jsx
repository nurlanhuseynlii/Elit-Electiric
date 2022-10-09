import React from 'react'
import Vector5 from '../assets/img/Vector5.png';

const SecSix = () => {
  return (
    <div className="section-six">
    <div className="left">
        <div className="left-content">
            <div className="inside">
            <h1>Have any project ?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
            <button>
                <img src={Vector5} alt="" />
            </button>
        </div>
        </div>
    </div>
    <div className="right">
        <div className="content">
            <h1>Contact Us</h1>
        <form>
            <div className="input-name">
                <label for="name">Name</label>
                <input type="text" id='name' placeholder='Enter Your Name' />
            </div>
            <div clas="input-email">
                <label for="email">Mail</label>
                <input type="text" id='email' placeholder='Email Address' />
            </div>
            <div className="input-message">
                <label for="message">Message</label>
                <textarea id="message" rows="10" cols="40" placeholder="Type your message here"></textarea>
            </div>
            <button>Submit</button>
        </form>
        </div>
    </div>
</div>
  )
}

export default SecSix