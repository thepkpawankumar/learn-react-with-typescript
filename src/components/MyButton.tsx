import React from 'react'

type Props = {
    title: string
}

export  function MyButton({title}: Props) {
  return (
    <div>{title}</div>
  )
}