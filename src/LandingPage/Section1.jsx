import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/2.svg'
export default function Section1() {
  return (
    <div className=''>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <img src={svg1} style={{width:500}}/>
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Social Creation</h1>
                <p className="section_desc">
                  Managing your business presence across multiple social
                  platforms has never been easier. With Cygio you can create and
                  manage content at scale, tailoring your content to fit each
                  channel in just the perfect format.
                </p>
                <button className="land_btn">Text Goes Here</button>
              
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
