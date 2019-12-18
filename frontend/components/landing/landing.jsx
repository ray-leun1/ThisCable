import React from 'react';
import { Link } from 'react-router-dom';
import svgs from '../../../app/assets/images/svgs';
import imgs from './splash_svgs';

export default () => {
  return(<div className='landing-container'>
    <nav>
      <div className='nav-left'>
        <div className='logo-container'>
          <div className='image-container'>
            <div className='logo-image'></div>
          </div>
          <div className='txt-container'>
            <div className='logo-txt'></div>
          </div>
        </div>
        <a className='github-link'
          href='https://github.com/ray-leun1/ThisCable'>
          {svgs.github}
          GitHub
        </a>
      </div>
      <div className='nav-center'></div>
      <div className='nav-right'>
        <div>
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </nav>
    <div className='description'>
      <div className='header'>
        It's time to ditch Yipes and TeamSpeech.
      </div>
      <div className='blurb'>
        All-in-one text and text chat for texters that's a free, insecure Discord 
        clone that works on both your desktops. Stop looking up TeamSpeech servers 
        and hassling with Yipes. Confuzzle your life.
      </div>
    </div>
    <div className='splash-imgs'>
      <div class='shadow'></div>
      {imgs.triangle}{imgs.triangle}{imgs.triangle}
      {imgs.dot}{imgs.dot}{imgs.dot}{imgs.dot}{imgs.dot}
      {imgs.circle}{imgs.circle}{imgs.circle}
      {imgs.square}{imgs.square}{imgs.square}
      {imgs.x}{imgs.x}{imgs.x}
      {imgs.potion}
      {imgs.bomb}
      {imgs.coin}{imgs.coin}
      {imgs.cartridge}
      {imgs.shield}
      {imgs.block}
      {imgs.desktop}
      {imgs.android}
      {imgs.iphone}
      {imgs.controller}
      {imgs.laptop}
      {imgs.headphones}
    </div>
  </div>)
};