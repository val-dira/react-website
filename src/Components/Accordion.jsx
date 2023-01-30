import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './Accordion.css';
import { FAQData } from './CarouselData';


const AccordionSection = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 820px) {
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 50%;

    @media (max-width: 820px) {
       width: 100%;
    }
`;

const Wrap = styled.div`
    border-bottom: 2px solid lightgrey;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;

const Dropdown = styled.div`
    // border-bottom: 2px solid lightgrey;
    line-height: 24px
`;


const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index ) {
            // if clicked question is already active then close it

           return setClicked(null) 
        } 
        
        setClicked(index)
    }

  return (
    <>
    <div className='acc__main-section accordion'>
        <div className="acc-box">
            <div className="acc__main-text">
                <h2 className="acc__second-header">A Few Common questions</h2>
                <Link to="/FAQ" className="faq-link">View the full FAQ <i class="fas fa-arrow-right"></i></Link>
            </div>

            <AccordionSection>
                <Container>
                    {FAQData.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h2 className='faq-question__header'>{item.question}</h2>
                                <span>{clicked === index ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}</span>
                            </Wrap>
                            {clicked === index ? (
                                <Dropdown>

                                <p>{item.answer}</p>
                                </Dropdown>
                            ) : null}
                            
                            
                            </>
                        );
                    })}
                </Container>
                <div className="faq-image"></div>
            </AccordionSection>
            
        </div>
        
    </div>
    </>
  )
}

export default Accordion