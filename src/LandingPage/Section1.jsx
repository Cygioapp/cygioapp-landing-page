import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Section1() {
  return (
    <div>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ justifyContent: 'center', display: 'flex' }}></div>
          </Col>
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">
                  Distribute Contents Across Multiple Platform
                </h1>
                <p className="section_desc">
                  ffdfa afasf asfsdfa afsd fsadfsda fasd fadfsf fasdf fasd fasd
                  fadfasdf fdfdfdfdf fdfafasd fasdfsf fasdsfas fasdfasd fasdf
                  fasdfasd fasdf adfasd fasdf fasd fasdfasd fadfasdf faf
                  fasdfasdf.
                </p>
                <button className="land_btn">Text Goes Here</button>
                <p
                  className="hero_desc mt-1"
                  style={{ fontSize: 13, fontWeight: 'bold' }}
                >
                  No credit card required!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
