import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const Contact = () => {
  return (
    <Helmet title='Contact'>
        <CommonSection title='Contact'/>
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className="fw-bold">Get In Touch </h6>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
  )
}

export default Contact