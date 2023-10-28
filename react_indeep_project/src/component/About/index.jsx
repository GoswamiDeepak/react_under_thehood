import React from 'react'
import { useParams } from 'react-router-dom'

const index = () => {

  const {id} = useParams();
  console.log(useParams());
  return (
    <div>About {id}</div>
  )
}

export default index