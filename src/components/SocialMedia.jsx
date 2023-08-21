import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/byakkuya">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/ahmed-zbaa/">
      <BsLinkedin />
      </a>
    </div>
      <div>
      <a href="https://www.instagram.com/ahmedsvault/">
      <BsInstagram />
      </a>
    </div>
      <div>
      <a href="https://www.facebook.com/NarmerSama/">
      <FaFacebookF />
      </a>    
    </div>
  </div>
);

export default SocialMedia;
