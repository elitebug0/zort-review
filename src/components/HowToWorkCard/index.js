import React from 'react'
import './HowToWorkCard.css'


const HowToWorkCard = ({
    data
}) => {
    return (
        <div className='how-work-section-card'>
            <img src={data?.image} alt='flag'  className='img-fluid w-100'/>
            <h3>{data?.title}</h3>
            <p>{data?.content}</p>
        </div>
    )
}

export default HowToWorkCard