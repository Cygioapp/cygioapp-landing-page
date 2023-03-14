import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { Card, Col, Container, NavItem, Row } from 'reactstrap'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { primaryColor, secondaryColor } from './Colors'
import profile from '../images/Capture.jpg'
export default function CustomersReview() {
  const customers = [
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: <img src={profile} alt="customer" className="cust shadow" />,
      title: 'Artist',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: <img src={profile} alt="customer" className="cust shadow" />,
      title: 'Artist',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: <img src={profile} alt="customer" className="cust shadow" />,
      title: 'Artist',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: <img src={profile} alt="customer" className="cust shadow" />,
      title: 'Artist',
    },
  ]
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }} className="cust_review">
      <Container>
        <div className="text-center">
          <h1 className="section_heading">What our customers are saying</h1>
          <p className="section_desc">
            fafasf asdfafas ffasfasfas fasfasdfasdf afsfasdf trends and actionat
          </p>
        </div>
        <Row className="mt-5">
          {customers.map((c) => (
            <Col md={3}>
              <Card className="cus_card p-4 shadow ">
                <div className="cus_div">{c.image}</div>
                <p className="cus_name m-0 mt-3">{c.name}</p>
                <p className="" style={{ color: secondaryColor, fontSize: 12 }}>
                  {c.title}
                </p>
                <div style={{ display: 'flex' }}>
                  <RiDoubleQuotesL />
                  <span style={{ color: secondaryColor }}>
                    ------------------------------
                  </span>
                </div>

                <p style={{ color: primaryColor, fontSize: 13 }}>{c.comment}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
