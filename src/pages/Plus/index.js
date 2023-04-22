import React from 'react'
import './Plus.scss'
import { NavLink, Outlet } from 'react-router-dom'

export default function Plus() {

  return (
    <div className='ariza'>
      <>
        <div className="title">Qo'shish</div>
        <p className="par">Yangi kategoriya/taom qo’shish </p>

        <div className="kategory">
          <NavLink to={'home'} className="katBtn  btn btn1">Kategoryia</NavLink>
          <NavLink to={'qoshish'} className="btn btn1">Taom</NavLink>
        </div>

        <Outlet/>
      </>
    </div>
  )
}
