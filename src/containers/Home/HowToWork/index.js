import React from 'react'
import './HowToWork.css'
import { Container } from 'react-bootstrap'
import HowToWorkCard from '../../../components/HowToWorkCard';
import { howToWork } from '../../../constant/home';

const HowWork = () => {
    return (
        <div className='how-work-section'>
            <Container>
                <div className="how-work-container">
                    <div className='how-work-section-left'>
                    <h2>Here is how it works...</h2>
                        {howToWork?.slice(0,3)?.map((item, index) => <HowToWorkCard key={index} data={item} />)}
                        <div className='how-work-section-left-img'>
                            <img src='/images/bordericon.svg' alt='flag'  />
                        </div>
                    </div>
                    <div className='how-work-section-right'>
                        <h2>Here is how it works...</h2>
                        {howToWork?.slice(3)?.map((item, index) => <HowToWorkCard key={index} data={item} />)}
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default HowWork