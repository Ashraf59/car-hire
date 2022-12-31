

import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../../Style/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = ({aboutClass}) => {
  return (
   <section 
   className='about__section'
   style={
    aboutClass === 'aboutPage'? {marginTop: "0px"} : {marginTop: "280px"}
   }
   >
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="section__subtitle">About Us</h4>
                    <h2 className="section__title">Welcome to car hire service</h2>
                    <p className="section__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus recusandae quo quaerat, optio porro voluptas laborum reprehenderit nesciunt? Officiis tempora asperiores nulla illo iste voluptates sint sequi. Dolores voluptatum dicta harum dolor quaerat aut ipsum vel quod molestias amet fugiat, molestiae id optio inventore aperiam modi hic quo eaque. Earum?
                    </p>
                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center    gap-2">
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                        </p>
                        <p className="section__description d-flex align-items-center    gap-2">
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                        </p>

                    </div>
                    <div className="about__section-item d-flex align-items-center">
                        <p className="section__description d-flex align-items-center    gap-2">
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                        </p>
                        <p className="section__description d-flex align-items-center    gap-2">
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
                        </p>

                    </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={aboutImg} alt="" className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default AboutSection