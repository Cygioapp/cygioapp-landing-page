import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import svg1 from '../images/5.svg'

export default function Section2() {
  return (
    <div className=''>
      <Container>
        <Row className="m-0 hero_section">
          <Col md={6} className="">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <h1 className="section_heading">Smart Inboxes</h1>
                <p className="section_desc">
                  Unify all your business chats across all platforms, enabling
                  you optimize customer interactions and drive sales. Our
                  fine-tuned AI models enables you to maintain communication
                  with your customers, by inferring conversation intent and
                  providing accurate feedbacks all on auto-pilot; think of
                  chatbots, but smarter and more intuitive.
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
