import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/3.svg'

export default function Section3() {
  return (
    <div>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <img
                src={svg1}
                className="section_img"
                style={{
                  width: 500,
                }}
              />
            </div>
          </Col>
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Analytics</h1>
                <p className="section_desc">
                  Gain actionable and easy-to-read insights on how your business
                  is growing, and what channels matters the most to your growth.
                  Track all your KPIs, and visualize ROI without using
                  third-party tools.
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
