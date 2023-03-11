import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { primaryColor } from './Colors'

export default function Newsletter() {
  return (
    <div className="p-5 newsletter_div">
      <Card className='newsletter_card'>
        <Row>
          <Col md={6} className="p-5">
            <h1 className="section_heading m-0">Hey, Wait...</h1>
            <p className="m-0" style={{color:primaryColor}}>Subscribe to our newsletter!</p>
            <p className="" style={{color:primaryColor}}>
              You will never miss our updates, latest news, etc.
            </p>
            <input type="email" placeholder="email@example.com" />
            <button className="news_btn">Subscribe</button>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Card>
    </div>
  )
}
