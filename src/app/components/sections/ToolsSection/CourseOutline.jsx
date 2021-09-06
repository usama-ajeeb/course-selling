import React from 'react'
import styled from 'styled-components'
import { H2, H3, SmallText } from '../../styles/TextStyles'

const CourseOutline = ({ title, time, description, length }) => {
  return (
    <Wrapper>
      <Heading>
        <Number>{length}</Number>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </Heading>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default CourseOutline

const Wrapper = styled.div`
  cursor: pointer;

  :hover {
    background: rgba(195, 192, 192, 0.2);
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 1px 5px;
  }
`
const Number = styled.div`
  width: 36px;
  height: 36px;
  background: #2fb5fc;
  border-radius: 50px;
  display: grid;
  -webkit-box-align: center;
  place-items: center;
  color: #ffffff;
  font-size: 20px;
`
const Heading = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 10px;
  align-items: center;
  justify-content: left;
  margin-top: 10px;
`
const Title = styled(H3)`
  font-size: 18px;
  font-weight: 500;
  color: black;
  opacity: 0.9;
  width: 173px;
`
const Time = styled.div`
  background: #2fb5fc;
  border-radius: 5px;
  width: 41px;
  height: 21px;
  align-items: center;
  padding: 2px 6px;
  color: #ffff;
`
const Description = styled(SmallText)`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  padding: 10px;
  width: 200px;
  margin-left: 34px;
  margin-top: -10px;
  color: black;
`
