import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/13.svg'

export default function Section6() {
  return (
    <div>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Collaboration</h1>
                <p className="section_desc">
                  Whether you are a small and growing business or an industry
                  giant, our platform is suited to meet your needs, enabling you
                  to collaborate with team members to develop business
                  strategies that work for brand.
                </p>
                <button className="land_btn">Read more...</button>
              </div>
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
            <img className='section_img' src={svg1} style={{width:500}}/>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
