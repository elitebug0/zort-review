import React from 'react'
import './Review.css'
import { Container } from 'react-bootstrap'
import ReviewCard from '../../../components/ReviewCard';
import { ReviewData } from '../../../constant/home';
import Slider from "react-slick";
const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                variableWidth: false,
            },
        },
    ],
};
const Review = () => {
    return (
        <div className='review-section'>
            <Container>
                <div className="review-container">
                    <div className='review-section-left'>
                        <h2>Our users are not just winning — they're winning big!</h2>
                        <div className='review-section-left-colum'>
                            {ReviewData?.slice(0, 2)?.map((item, index) => <ReviewCard key={index} data={item} />)}
                        </div>
                    </div>
                    <div className='review-section-right'>
                        {ReviewData?.slice(2, 4)?.map((item, index) => <ReviewCard key={index} data={item} />)}
                    </div>
                </div>
            </Container>

            <Container>
                <div className="review-mobile-container">
                <h2>Our users are not just winning — they're winning big!</h2>
                    <Slider {...settings}>
                        {ReviewData?.slice(0, 7)?.map((item, index) => <ReviewCard key={index} data={item} />)}
                    </Slider>
                </div>
            </Container>

        </div>
    )
}

export default Review