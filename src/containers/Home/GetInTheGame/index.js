import React from 'react'
import './GetInTheGame.css'
import { Container } from 'react-bootstrap'
import GetInTheGameCard from '../../../components/GetInGameCard'
import { BEAR, BULL, gameBearData } from '../../../constant/home'
const GetInTheGame = () => {
  return (
    <div className='get-in-the-game-section'>
      <Container>
        <div className='get-in-the-game-header'>
        <h2>Get in the game!</h2>
          <p>Engage in a thrilling battle of Bull VS Bear! </p>
          </div>
        <div className='get-in-the-game-container'>
        
          <div className='get-in-the-game-section-left'>
            <GetInTheGameCard gameType={BEAR} gameData={gameBearData} onJoinGame={() => { }} />
          </div>
          <div className='get-in-the-game-section-right'>
            <GetInTheGameCard gameType={BULL} gameData={gameBearData} onJoinGame={() => { }} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GetInTheGame