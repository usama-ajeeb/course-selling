import React, { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import { menuData, tooltipData } from '../../../data/MenuData'
import MenuButtons from '../buttons/MenuButtons'
import MenuTooltip from '../tooltips/MenuTooltip'

const ham = { title: '', icon: '/images/icons/hamburger.svg', link: '/' }

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  const toolTipHandler = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log('Document is clicked')
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <img src='/images/logos/logo.svg' alt='' />
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === '/account' ? (
            <MenuButtons
              key={index}
              src={item.icon}
              item={item.title}
              link={item.link}
              index={index}
              onClick={(e) => toolTipHandler(e)}
            >
              Account
            </MenuButtons>
          ) : (
            <MenuButtons
              key={index}
              src={item.icon}
              item={item.title}
              link={item.link}
              index={index}
            />
          )
        )}
        <HamburgerWrapper onClick={(e) => toolTipHandler(e)}>
          <MenuButtons src={ham.icon} item={ham.title} link={ham.link} />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
