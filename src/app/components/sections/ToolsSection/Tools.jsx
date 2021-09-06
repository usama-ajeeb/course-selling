import React from 'react'
import styled from 'styled-components'
import { H2, MediumText, SmallText2 } from '../../styles/TextStyles'
import Features from '../FeatureSection/Features'
import Card from './Card'
import CourseOutline from './CourseOutline'

const Tools = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <SmallText>120 HOURS OF COURSES</SmallText>
          <Title>Learn the best tools and platforms</Title>
          <Description>
            WE focus on industry leading platforms so that you can be prepared
            for your next job. then we teach all we can about them.
          </Description>
        </TextWrapper>
        <LogoWrapper>
          <img loading='lazy' src='/images/logos/swiftui-logo.svg' alt='' />
          <img src='/images/logos/react-logo.svg' alt='' />
          <img src='/images/logos/figma-logo.svg' alt='' />
          <img src='/images/logos/sketch-logo.svg' alt='' />
          <img src='/images/logos/framer-logo.svg' alt='' />
          <img src='/images/logos/webflow-logo.svg' alt='' />
          <img src='/images/logos/protopie-logo.svg' alt='' />
        </LogoWrapper>
        <SearchWrapper>
          <img src='/images/icons/search.svg' alt='' />
          <input type='text' placeholder='SEARCH' />
          <img src='/images/icons/x.svg' alt='' style={{ display: 'none' }} />
        </SearchWrapper>
      </ContentWrapper>
      <Features />
    </Wrapper>
  )
}

export default Tools

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 380px auto auto;
  column-gap: 80px;
  max-width: 1200px;
  margin: 0px auto;
  /* padding: 0px 30px; */
  align-items: flex-end;
`
const TextWrapper = styled.div`
  max-width: 400px;
  display: grid;
  gap: 30px;
`
const Title = styled(H2)``
const SmallText = styled(SmallText2)`
  opacity: 0.8;
`
const Description = styled(MediumText)``
const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 30px;

  > img {
    width: 44px;
    height: 44px;
  }
`
const SearchWrapper = styled.div`
  background: linear-gradient(
    rgba(99, 106, 150, 0.8) 0%,
    rgba(182, 186, 214, 0.6) 100%
  );

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  padding: 0 5px;
  width: 204px;
  height: 44px;
  > input {
    background: transparent;
    border: none;

    outline: none;
  }

  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
`
