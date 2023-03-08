import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header from './Header'
export default function HeroSection() {
  return (
    <div className="first">
      <Header />
      <Container>
        <Row className="m-0 hero_section">
          {/* <Col md={1}></Col> */}
          <Col md={6}>
            <h1 className="hero_heading">
              Promoting Brand inclusivity for African businesses!
            </h1>
            <p className='hero_desc'>
              Cygio provides digital marketers and content creators with tools
              that enable them create and distribute contents across social
              platforms at scale in order to optimize customer interactions.
            </p>
            <button className='land_btn'>Start Your Free Trial</button>
          </Col>
          <Col md={6}></Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </Container>
    </div>
  )
}
