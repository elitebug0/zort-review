import React from 'react'
import { BEAR, } from '../../constant/home'

import './GetInGameCard.css'
import { Button } from 'react-bootstrap'

const GetInTheGameCard = ({
    gameType,
    gameData,
    onJoinGame
}) => {

    const GameTab = (game, index) => {
        return <li key={index}>
            <div className='image-section'>
                <img src={game?.image} alt='arrow' />
                <p>{game?.name}</p>
            </div>
            <div className='price-section'>
                <p>$ {game?.price}</p>
            </div>

        </li>
    }

    return (
        <div className='get-in-the-game-section-card'>
            <div className='get-in-the-game-section-card-header'>
                <img src={gameType === BEAR ? '/images/bear.svg' : '/images/Bull.svg'} alt='bear' className='img-fluid' />
                <h4>{gameType}</h4>
            </div>
            <ul>
                {gameData.map((game, index) => (
                    GameTab(game, index)
                ))}
            </ul>
            <Button onClick={onJoinGame}>Join Arena</Button>
        </div>


    )
}

export default GetInTheGameCard