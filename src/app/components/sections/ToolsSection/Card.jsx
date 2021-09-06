import React from 'react'
import styled from 'styled-components'
import { H2, H3, SmallText2 } from '../../styles/TextStyles'

const Card = () => {
  return (
    <Wrapper>
      <Header>
        <StyledImg
          src='https://images.ctfassets.net/ooa29xqb8tix/iLdvMfr2kUmr6BtlG4bf5/53704aa37a74a07dff6a766334a234bd/iOS_Design_handbook_800x600_cover_new.png?w=400&q=50'
          alt=''
        />
        <div>
          <CourseLogo src='images/logos/react-logo.svg' />
          <Avatar src='images/avatars/chris.png' />
        </div>
      </Header>
      <CardFooter>
        <Title>React with hooks</Title>
        <Text>20 SECTIONS - 2 HOURS</Text>
        <Star src='images/icons/award.svg' />
      </CardFooter>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 10px;
  padding: 10px;
`
const Header = styled.div`
  position: relative;

  > div {
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    gap: 30px;
  }
`
const StyledImg = styled.img`
  width: 260px;
`

const CourseLogo = styled.img``
const Avatar = styled.img`
  width: 32px;
  height: 32px;
`
const Title = styled(H3)`
  color: #ffff;
  padding-top: 10px;
  /* text-align: center; */
`
const Text = styled(SmallText2)`
  color: #ffff;
  opacity: 0.7;
  /* text-align: center; */
  padding: 25px;
`
const Star = styled.img``

const CardFooter = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  place-items: center;
`
