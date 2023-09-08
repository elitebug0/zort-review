import React from 'react'
import './ReviewCard.css'


const ReviewCard = ({
    data
}) => {
    return (
        <div className='review-card'>
            <img src={data?.image} alt='flag' />
            <p>{data?.content}</p>
            <h3>{data?.title}</h3>
        </div>
    )
}

export default ReviewCard