import React from 'react'
import './Welcome.css'
import { Container } from 'react-bootstrap'

const WelCome = () => {
  return (
    <div className="welcome-section">
      <Container>
        <div className="welcome-container">
          <img src="/images/welcomebg.svg" alt="welcome" className="img-fluid w-100  bgimage" />
          <div className="welcome-left">          
            <img src="/images/welcomeimg.svg" alt="welcome" />
          </div>
          <div className="welcome-right">         
            <p>Welcome to Zort, an innovative <span>player-vs-player trading arena</span> where your crypto bets could turn into your fortune!</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WelCome