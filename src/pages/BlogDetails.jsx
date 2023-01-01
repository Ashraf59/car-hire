import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import blogData from '../assets/data/blogData'

const BlogDetails = () => {
  const {slug} = useParams();
  const blog = blogData.find(blog => blog.title === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  },[blog]);

  return (
    <Helmet title={blog.title}>
     <section>
     <Container>
        <Row>
          <Col lg='8' md='6'>
            <div className="blog__details">
              <img src={blog.imgUrl} alt="" className='w-100'/>
              <h2 className="section__title mt-4"> {blog.title}</h2>

              <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
              <span className="blog__author">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
              </div>
              <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </Helmet>
  )
}

export default BlogDetails