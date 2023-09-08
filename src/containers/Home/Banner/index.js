import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './Banner.css'

const HomeBanner = () => {
    return (
        <div className='banner-section'>
            <Container>
                <div className="banner">
                    <div className="banner-content">
                        <h1>Ready to test your crypto intuition?</h1>
                    </div>
                    <div className="banner-image">
                        <img src="/images/banner.png" alt="banner"  className='img-fluid desktop-banner'/>
                        <img src="/images/mobilebanner.png" alt="banner"  className='img-fluid mobile-banner'/>
                        <div className='banner-box1'>
                            <p>
                            Will Bitcoin go <span style={{
                                color: "#7FCA20",
                            }}>Up </span>  or <span style={{
                                color: "#FF2149",
                            }}>Down</span>?
                            </p>
                           
                            <Button className='up-btn'>
                                Up
                            </Button>
                            <Button className='down-btn'>
                                Down
                            </Button>
                        </div>
                        <div className='banner-box2'>
                                    <h2>1494</h2>
                                    <p>Players Betting</p>
                            </div>
                            <div className='banner-box3'>
                                    <h2><span> $ </span>86,500</h2>
                                    <p>Amount to be Won</p>
                            </div>
                    </div>
                    <div className="banner-subtitle">
                        <p>Turn your guesswork into earnings with our one-of-a-kind prediction platform</p>
                        <div className="banner-button">
                            <Button style={{
                                borderColor: "#6ff3f3",
                            }}>Join Us</Button>
                            <Button style={{
                                borderColor: "#fff",
                            }}>How it works?</Button>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default HomeBanner