import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuButtons = ({ src, item, link, index, onClick }) => {
  return (
    <Link to={link} key={index} onClick={onClick}>
      <MenuItem title={item}>
        <img src={src} alt={item.title} />
        {item}
      </MenuItem>
    </Link>
  )
}

export default MenuButtons

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;

  gap: ${(props) => (props.title ? '10px' : '0px')};
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
