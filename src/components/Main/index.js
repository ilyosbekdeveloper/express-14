import React, { useContext } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.scss'
import Bar from '../../imgs/Group (1).png'
import AdminImg from '../../imgs/header.png'
import Express from '../../imgs/image 15.png'
// li brands 
import Ariza from '../../imgs/chart-donut.png'
import Products from '../../imgs/check-outline.png'
import Statistika from '../../imgs/chart-bar.png'
import Plus from '../../imgs/plus-icon.webp'
import Foydalanuvchilar from '../../imgs/ph_users-three-light.png'
import { LogInContext } from '../../context/LogInContext'

export default function Main() {
  const navigate = useNavigate()

  const {isLogin, setLogin} = useContext(LogInContext)
  
  return (
    <>
        <div className="flex">
          <aside>
            <div className="logo">
              <img src={Express} alt="" />
            </div>

            <ul>
              <li>
                <NavLink to='panel' className='d-flex lii align-items-center'>
                  <div className="li-brand"><img src={Ariza} alt="" /></div>
                  <div className="">
                    <div className="li-title">Arizalar</div>
                    <p className="li-par">Yetib kelgan arizalarni kuzatishingiz mumkin</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to='products' className='d-flex lii align-items-center'>
                  <div className="li-brand"><img src={Products} alt="" /></div>
                  <div className="">
                    <div className="li-title">Yetkazilganlar</div>
                    <p className="li-par">Yetkazilgan taomlar ro’yxati bilan tanishing</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to='statistika' className='d-flex lii align-items-center'>
                  <div className="li-brand"><img src={Statistika} alt="" /></div>
                  <div className="">
                    <div className="li-title">Statistika</div>
                    <p className="li-par">Diagrammalar bilan ishlangan statistika</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to='plus' className='d-flex lii align-items-center'>
                  <div className="li-brand"><img className='plusIcon' src={Plus} alt="" /></div>
                  <div className="">
                    <div className="li-title">Qo'shish</div>
                    <p className="li-par">Yangi taom qo'shish</p>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to='foydalanuvchilar' className='d-flex lii align-items-center'>
                  <div className="li-brand"><img src={Foydalanuvchilar} alt="" /></div>
                  <div className="">
                    <div className="li-title">Foydalanuvchilar</div>
                    <p className="li-par jek">Rollarni biriktirishingiz mumkin</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </aside>
          <div className="bo">

            <header className='shadow mb-2 d-flex align-items-center p-3'>
              <div className="leftSection">
                  <img src={Bar} alt="" />
              </div>
              <div className="rightSection">
                <button className="btn btn-primary" 
                onClick={()=>{
                  setLogin(false)
                  navigate('/')
                }}
                >Log Out</button>
                <button className="btn btn-primary"
                onClick={() => navigate('/')}
                >Home</button>
                  <img src={AdminImg} alt="" />
              </div>
            </header>

            <main>
              <Outlet/>
            </main>
          </div>
        </div>
    </>
  )
}

// https://www.figma.com/file/GMyODzd19FwWzf4lnnG818/Express-24?node-id=0%3A1