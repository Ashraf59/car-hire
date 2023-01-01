import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import carData from '../assets/data/carData';
import Helmet from '../components/Helmet/Helmet';

const CarDetails = () => {
    const {slug} = useParams();
    const singleCarItem = carData.find((item) => item.carName === slug);
    return (
       <Helmet title ={singleCarItem.carName}>
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <img src={singleCarItem.imgUrl} alt="" className='w-100' />
                    </Col>

                    <Col lg='6'>
                        <div className="car__info">
                            <h2> {singleCarItem.carName}</h2>
                            <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                                <h6 className="rent__price">${singleCarItem.price}.00/Day</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

       </Helmet>
    );
};

export default CarDetails;