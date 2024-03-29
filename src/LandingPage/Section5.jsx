import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/8.svg'

export default function Section5() {
  return (
    <div>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
            <img src={svg1} className='section_img' style={{width:500}}/>

            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Social listening</h1>
                <p className="section_desc">
                  Uncover trends and actionable insights from social data to
                  inform brand and business strategy. Garner insights on what
                  your customer are saying about you, to enable you stay ahead
                  of the curve and build an authentic brand experience.
                </p>
                <button className="land_btn">Read more...</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
