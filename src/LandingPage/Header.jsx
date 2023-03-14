import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import logo from '../images/cygio-logo.png'
import icon from '../images/cygio-icon.png'
export default function Header() {
  return (
    <div className="nav_">
      <Container>
        <Row className="m-0">
          <Col md={4} className="nav_col1">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '75px',
              }}
            >
              <div>
                <img src={icon} alt="logo2" className="icon" />
                <img src={logo} alt="logo" className="logo" />
              </div>
            </div>
          </Col>
          <Col md={4} className="nav_col2">
            <p className="m-0">Features</p>
            <p className="m-0">Testimonials</p>
            <p className="m-0">Pricing</p>
            <p className="m-0">FAQ</p>
          </Col>
          <Col md={4} className="nav_col3">
            <button className="m-0 auth_button shadow">
              Start Your Free Trial
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
