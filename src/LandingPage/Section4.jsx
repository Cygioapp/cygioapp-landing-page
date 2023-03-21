import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/10.svg'

export default function Section4() {
  return (
    <div>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Influencer Marketing</h1>
                <p className="section_desc">
                  Connect and build relationships with in-house influencers and
                  creators that truly understand your product’s value
                  proposition and can communicate it to your target audience.
                  Our high-level filtering tools, gives you the access to find
                  the best creators that can help you build brand equity and
                  trust.
                </p>
                <button className="land_btn">Text Goes Here</button>
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
            <img src={svg1} style={{width:400}}/>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
