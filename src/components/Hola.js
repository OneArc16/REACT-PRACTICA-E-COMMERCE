import React from 'react'

export default function Hola(props) {
  return (
    <div>
      <p>Hola mi nombre es {props.userInfo.nombre}, tengo {props.userInfo.edad} y mi color favorito es el {props.userInfo.color}</p>
    </div>
  )
}
