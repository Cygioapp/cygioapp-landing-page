import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import apple from '../Images/apple.png'
import google from '../Images/google.png'
export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="m-0 p-4">
          <Col md={3}>
            <p className="footer_p">Contact</p>
            <p className="sub_p">+234 000 0000 000</p>
            <p className="sub_p">+234 000 0000 000</p>
            <p className="sub_p">No 0, ABC Residence, Kano </p>
            <p className="sub_p">contact@cygio.app</p>
            <p className="footer_p">Support</p>
            <p className="sub_p">support@cygio.app</p>
            <p className="sub_p">FAQs</p>
            <p className="sub_p">Help Center</p>
          </Col>
          <Col md={3}>
            <p className="footer_p">Features</p>
            <p className="sub_p">Distribute Contents</p>
            <p className="sub_p">Schedule Contents</p>{' '}
            <p className="sub_p">Unifying Chat</p>
            <p className="sub_p">Unifying Notifications</p>
          </Col>
          <Col md={3}>
            <div style={{ float: 'right', textAlign: 'right' }}>
              <p className="footer_p">Integration</p>
              <p className="sub_p">Facebook Management</p>
              <p className="sub_p">Twitter Management</p>
              <p className="sub_p">Instagram Management</p>
              <p className="sub_p">LinkedIn Management</p>
              <p className="sub_p">TikTok Management</p>
            </div>
          </Col>
          <Col md={3} className="">
            <div style={{ float: 'right', textAlign: 'right' }}>
              <p className="footer_p">Company</p>
              <p className="sub_p">About Cygio</p>
              <p className="sub_p">Pricing</p>
              <p className="sub_p">Investors</p>
              <p className="sub_p">Security</p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <div
              style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}
              className="mt-4"
            >
              <div>
                <img
                  className="apple fff"
                  src={apple}
                  alt="downloadinappstore"
                />
              </div>
              <div>
                <img
                  className="google fff"
                  src={google}
                  alt="downloadinplaystore"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* contact support platform/features integrations company */}
    </div>
  )
}
