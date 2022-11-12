import React from 'react'
import Post from './Post'
import data from './data.json'

// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

export default function Posteos({aumentar}) {

  return (
    <div className='container'>
      {data.map(element => <Post aumentar={aumentar} coso={element} key={element.id} />)}
      <Post/>
    </div>
  )
}
