import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from './Header'
import apple from '../Images/apple.png'
import google from '../Images/google.png'

export default function HeroSection() {
  return (
    <div className="first">
      <Header />
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="hero_heading">
                  Promoting Brand Inclusivity for African Businesses!
                </h1>
                <p className="hero_desc">
                  Cygio provides digital marketers and content creators with
                  tools that enable them create and distribute contents across
                  social platforms at scale in order to optimize customer
                  interactions.
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
                <img className="apple" src={apple} alt="downloadinappstore" />
              </div>
              <div>
                <img
                  className="google"
                  src={google}
                  alt="downloadinplaystore"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
