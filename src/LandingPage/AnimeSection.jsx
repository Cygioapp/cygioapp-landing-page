import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function AnimeSection() {
  return (
    <div className="text-center p-5">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h1 className="section_heading">
              We are the #1 platform for [social management], [public
              relations], [influencer marketing], [social listening].
            </h1>
            <p className="section_desc">
              Managing your business presence across multiple social platforms
              has never been easier. With Cygio you can create and manage
              content at scale, tailoring your content to fit each channel in
              just the perfect format.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
