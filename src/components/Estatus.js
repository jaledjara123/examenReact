import React from 'react'

export default function Estatus({totalLikes}) {
  
  return (
    <header>
      <h1>Estatus de posteo</h1>
      <p> Likes de posteo: <span>{totalLikes}</span>
      </p>  
    </header>
  )
}
