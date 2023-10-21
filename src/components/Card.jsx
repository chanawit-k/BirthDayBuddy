import React from 'react'

const Card = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <h4>{age} years</h4>
      </div>
    </article>
  )
}

export default Card
