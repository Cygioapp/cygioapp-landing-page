import React from 'react'
import { AiOutlineFacebook } from 'react-icons/ai'
import { Card, Col, Container, Row } from 'reactstrap'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { primaryColor, secondaryColor } from './Colors'
export default function CustomersReview() {
  const customers = [
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: '',
      title: 'Doctor',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: '',
      title: 'Doctor',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: '',
      title: 'Doctor',
    },
    {
      name: 'Future Hndrx',
      icon: <AiOutlineFacebook />,
      comment: 'afasf fadfasf fasdfas fasdfas fasdfasd fasd fasfs',
      image: '',
      title: 'Doctor',
    },
  ]
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }} className="">
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p className="cus_name">{c.name}</p>
                  {c.icon}
                </div>
                <div style={{ display: 'flex' }}>
                  <RiDoubleQuotesL />
                  <span style={{color:secondaryColor}}>------------------------------</span>
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
