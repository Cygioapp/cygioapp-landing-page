import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { secondaryColor } from './Colors'

export default function AnimeSection() {
  const [feature, setFeature] = useState('')
  const socialM = () => {
    setFeature('Social Management')
    setTimeout(publicM, 2000)
  }
  const publicM = () => {
    setFeature('Public Relations')
    setTimeout(influencerM, 2000)
  }
  const influencerM = () => {
    setFeature('Influencer Marketing')
    setTimeout(socialL, 2000)
  }
  const socialL = () => {
    setFeature('Social Listening')
    setTimeout(socialM, 2000)
  }

  useEffect(() => {
    socialM()
  }, [])
  return (
    <div
      style={{ paddingTop: 100, paddingBottom: 100 }}
      className="text-center anime_section"
    >
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h1 className="section_heading">
              We are the #1 platform for{' '}
              <span style={{ color: secondaryColor }} className="anim">
                {feature}
              </span>
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
