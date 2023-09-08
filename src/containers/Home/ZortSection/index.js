import React from 'react'
import './ZortSection.css'
import { Container } from 'react-bootstrap'

const ZortSection = () => {
  return (
    <div className='zort-section'>
      <Container>
        <div className="zort-container">
          <div className='zort-section-title'>
            <h2>Why Zort?</h2>
            <p>You’re challenging fellow users, not a big company or exchange</p>
          </div>
          <div className='zort-section-content'>
            <img src="/images/zortbg.svg" alt="zort" className="img-fluid w-100 zort-bg-img" />
            <div className='zort-section-contentContainer'>
            <div className='zort-section-contenttext'>
              <img src="/images/icon1.svg" alt="zort" />
              <p>We <span>turn crypto predictions into a thrilling game</span> of strategy and reward!</p>
            </div>
            <div className='zort-section-contenttext zort-section-center'>
              <img src="/images/icon2.svg" alt="zort" />
              <p><span>Predict the market's moves</span>, clash with rival traders, and multiply your stakes</p>
            </div>
            <div className='zort-section-contenttext'>
              <img src="/images/icon3.png" alt="zort" />

              <p>Trade smarter, outsmart fellow traders in high-stakes crypto forecasts, and <span>seize fortunes</span></p>
            </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}

export default ZortSection