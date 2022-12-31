import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import FindCarForm from '../components/UI/FindCarForm';
import HeroSlider from '../components/UI/HeroSlider';
import ServiceList from '../components/UI/ServiceList';
import carData from '../assets/data/carData';
import CarItem from '../components/UI/CarItem';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';



const Home = () => {
    return (
        <Helmet title='Home'>
            {/* ============ Hero Section ============== */}
        <section className="p-0 hero__slider-section">
            <HeroSlider/>
            <div className="hero__form">
                <Container>
                    <Row className='form__row'>
                        <Col lg='4' md='4'>
                            <div className="find__cars-left">
                                <h2>Find your best car here</h2>
                            </div>
                        
                        </Col>

                        <Col lg='8' md='8' sm='12'>
                            <FindCarForm/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

        {/* ============ About Section ============== */}
        <AboutSection/>

        {/* ============ Service Section ============== */}

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                            <h6 className="section__subtitle">See our</h6>
                            <h2 className="section__title">Popular Services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
            </section>

             {/* ============ Car Offer Section ============== */}
             <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>

                        {
                            carData.slice(0, 6).map((item) =>(
                                <CarItem item={item} key={item.id}/>
                            ))
                        }
                    </Row>
                </Container>
             </section>

              {/* ============ Become a Driver Section ============== */}
              <BecomeDriverSection/>

               {/* ============ Testimonial Section ============== */}

               <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-4 text-center'>
                        <h6 className="section__subtitle">Our clients says</h6>
                        <h2 className="section__title">Testimonials</h2>
                        </Col>
                        <Testimonial/>
                    </Row>
                </Container>
               </section>

                 {/* ============ Blog Section ============== */}

                 <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5 text-center'>
                        <h6 className="section__subtitle">Explore our blogs</h6>
                        <h2 className="section__title">Latest Blogs</h2>
                        </Col>
                        <BlogList/>
                    </Row>
                </Container>
               </section>
    </Helmet>
    )
};

export default Home;