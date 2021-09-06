import React from 'react'
import styled from 'styled-components'
import { CourseOutlineData } from '../../../../data/MenuData'
import { SmallText2 } from '../../styles/TextStyles'
import Card from '../ToolsSection/Card'
import CourseOutline from '../ToolsSection/CourseOutline'

const Features = () => {
  return (
    <FeatureWrapper>
      <FeatureCourse1>
        <Courses>
          {CourseOutlineData.map((i) => (
            <CourseOutline
              title={i.title}
              time={i.time}
              description={i.description}
              length={i.id}
            />
          ))}
        </Courses>
        <Card />
      </FeatureCourse1>
      <FeatureCourse2>
        <Courses>
          {CourseOutlineData.map((i) => (
            <CourseOutline
              title={i.title}
              time={i.time}
              description={i.description}
              length={i.id}
            />
          ))}
        </Courses>
        <Card />
      </FeatureCourse2>
    </FeatureWrapper>
  )
}

export default Features
const FeatureWrapper = styled.div`
  max-width: 1234px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
`
const FeatureCourse1 = styled.div`
  /* position: absolute; */
  width: 597px;
  height: 400px;

  margin-top: 70px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  padding: 20px;

  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  display: grid;
  grid-template-columns: 300px 270px;
`
const FeatureCourse2 = styled.div`
  /* position: absolute; */
  width: 597px;
  height: 400px;

  margin-top: 70px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.5px inset;
  border-radius: 20px;
  padding: 20px;

  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  display: grid;
  grid-template-columns: 300px 270px;
`

const Courses = styled.div`
  padding: 5px;
`

const Text = styled(SmallText2)``
