import React, { useEffect, useState } from 'react'
import datas from '../data'
import Card from './Card'

const Cards = () => {
  const [users, setUsers] = useState(datas)

  return (
    <main>
      <section className="container">
        <h2>{users.length} BirthDay Today</h2>
        <ul>
          {users.map((data) => {
            return <Card key={data.id} {...data} />
          })}
        </ul>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => {
            setUsers([])
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  )
}

export default Cards
