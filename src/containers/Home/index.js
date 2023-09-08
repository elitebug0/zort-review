import React from 'react'
import WelCome from './Welcome'
import HomeBanner from './Banner'
import ZortSection from './ZortSection';
import HowToWork from './HowToWork';
import GetInTheGame from './GetInTheGame';
import Review from './Review';
import JoinZort from './JoinZort';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <WelCome />
      <ZortSection />
      <HowToWork />
      <GetInTheGame />
      <Review />
      <JoinZort />
    </div>
  )
}

export default Home
