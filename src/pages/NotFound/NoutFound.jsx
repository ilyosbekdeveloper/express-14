import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NoutFound() {
    const location = useLocation()
    console.log(location);
  return (
    <div className='notfound'>
        <h1>"<span>{location.pathname}</span>" is Not Found</h1>
    </div>
  )
}
