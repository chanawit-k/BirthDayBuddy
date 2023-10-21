import React, { useEffect, useState } from 'react'
import datas from '../data'
import Card from './Card'

const Cards = () => {
  const [users, setUsers] = useState(datas)

  return (
    <section>
      <h2>{datas.length} BirthDay Today</h2>
      <ul>
        {users.map((data) => {
          return <Card key={data.id} {...data} />
        })}
      </ul>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setUsers([])
        }}
      >
        Clear All
      </button>
    </section>
  )
}

export default Cards
