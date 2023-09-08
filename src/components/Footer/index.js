import React from 'react'

import './Footer.css';
import { Button, Container } from 'react-bootstrap';
import JoinZort from '../../containers/Home/JoinZort';

const Footer = () => {
  return (
    <div className='footer'>
  
      <Container>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="footer-left">
            <div className='footer-links'>
              <a href='/'>About</a>
              <a href='/'>How It Works</a>
              <a href='/'>Reviews</a>
              <a href='/'>Contact</a>

            </div>
            <div className='footer-button '>
              <Button style={{
                borderColor: "#FFF",
              }}> Log In</Button>
              <Button style={{
                borderColor: "#6FF3F3",
              }} >Sign Up</Button>
            </div>
          </div>
        </div>

        <div className='copy-right'>
                <p>© ZORT Inc. 2023 All rights reserved</p>
        </div>  
      </Container>
    </div>
  )
}

export default Footer