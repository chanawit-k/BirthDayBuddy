import React from 'react'

const Card = ({ image, name, age }) => {
  return (
    <li>
      <img src={image} alt={name} width="100px" />
      <h4>{name}</h4>
      <h4>{age} years</h4>
    </li>
  )
}

export default Card
