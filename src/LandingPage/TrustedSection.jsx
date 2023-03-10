import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { primaryColor, secondaryColor } from './Colors'
import { FaAirbnb } from 'react-icons/fa'
import { BsMicrosoft } from 'react-icons/bs'
import { AiOutlineGoogle, AiFillApple, AiOutlineAmazon } from 'react-icons/ai'
import {SiOpenai} from 'react-icons/si'
export default function TrustedSection() {
  return (
    <div className="trusted">
      <Container>
        <Row className="p-5">
          <Col md={1}></Col>
          <Col md={10}>
            <div className="text-center">
              <h1
                className="heading2"
                style={{ color: primaryColor, fontSize: 18 }}
              >
                Trusted by 50+ companies across Nigeria
              </h1>
              <p className="">
                {' '}
                Lorem ipsum gsdolor gsfgs fsgdsds sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className="trusted_icons_div">
              <AiOutlineAmazon  size='3.1rem'/>
              <AiOutlineGoogle  size='3.1rem'/>
              <BsMicrosoft  size='2.4rem'/>
              <FaAirbnb  size='3.1rem'/>
              <AiFillApple  size='3.1rem'/>
              <SiOpenai  size='3.1rem'/>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  )
}
