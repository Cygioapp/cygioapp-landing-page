import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from './Header'
import lady from '../images/lady3.png'
export default function HeroSection() {
  return (
    <div className="first pt-4g">
      {/* <Header /> */}
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="hero_heading">
                  Promoting Brand Inclusivity for African Businesses!
                </h1>
                <p className="hero_desc">
                  Cygio is Africa’s largest social management platform,
                  combining the power of social creation, social listening, and
                  influncer marketing to enable in-house brands build the
                  ultimate customer experience.
                </p>
                <button className="land_btn">Start Your Free Trial</button>
                <p
                  className="hero_desc mt-1"
                  style={{ fontSize: 13, fontWeight: 'bold' }}
                >
                  No credit card required!
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }} className="mt-4">
              <div>
                <img
                  className="apple"
                  src="https://res.cloudinary.com/dx5ilizca/image/upload/v1678514509/apple_sm881k.png"
                  alt="downloadinappstore"
                />
              </div>
              <div>
                <img
                  className="google"
                  src="https://res.cloudinary.com/dx5ilizca/image/upload/v1678514510/google_ard7pi.png"
                  alt="downloadinplaystore"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              {/* <img src={lady} alt='lady' className='lady'/> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
