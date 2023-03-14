import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { primaryColor } from './Colors'

export default function Newsletter() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }} className="newsletter_sec">
      <Container>
        <div className="newsletter_div">
          <Card className="newsletter_card shadow">
            <Row>
              <Col md={6} className="p-5">
                <h1 className="section_heading m-0">Newsletter</h1>
                <p className="m-0" style={{ color: primaryColor }}>
                  Subscribe to our newsletter!
                </p>
                <p className="" style={{ color: primaryColor }}>
                  You will never miss our updates, latest news, etc.
                </p>
                <div className="news_input">
                  <input
                    type="email"
                    className=""
                    placeholder="email@example.com"
                  />
                  <button className="_btn">Subscribe</button>
                </div>
              </Col>
              <Col md={6} className="right_news"></Col>
            </Row>
          </Card>
        </div>
      </Container>
    </div>
  )
}
