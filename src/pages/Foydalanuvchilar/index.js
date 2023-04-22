import React, { useState } from 'react'
import './Foydalanuvchilar.scss'
import { Container } from 'react-bootstrap'
import Arizalardata from '../../data/arizalar';
import PenImg from '../../imgs/Pen.png'
import TrashImg from '../../imgs/Trash.png'


export default function Foydalanuvchilar() {
  
  const ArizlarDatas = Arizalardata();
  
  const [inpValue, setInpValue] = useState('')

  const [showModal, setShowModal] = useState(false)

  const check = ()=>{
    inpValue == '' && setInpValue('')
    setShowModal(false)
  }

  // rolls
  const admin = 'admin'
  const yetkazuvchi = 'yetkazuvchi'
  const foydalanuvchi = 'foydalanuvchi'
  
  return (
    <>
    <div className='ariza'>
      <Container className='py-3 ps-4'>
        <h1 className="title">Arizalar</h1>
        <p className="par">
          Yetib kelgan arizalarni kuzatishingiz mumkin
        </p>

        <table className="table arizalarTable">
          <thead>
            <tr>
              <td>#</td>
              <td>To'liq ismi</td>
              <td>Telefon raqami</td>
              <td>Roli</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {
              ArizlarDatas.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>{item.roli}</td>
                  <td></td>
                  <td></td>
                  <td className='tdImg'><img src={PenImg} alt="" onClick={()=> setShowModal(true)}/></td>
                  <td className='tdImg'><img src={TrashImg} alt="" /></td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className="count count2">
          <div className="left-count">Jami</div>
          <div className="right-count">4 ta akkaunt</div>
        </div>
      </Container>

    </div>

      {showModal && <div>
          <div className="overlay" onClick={check}></div>
          <div className="modall">
            <div className="modal-title text-center py-5">
              Foydalanuvchi uchun roll tanlang
            </div>

            <div className="edit-section">
              <select>
                <option value="yetkazuvchi">Yetkazuvchi</option>
                <option value="admin">Admin</option>
                <option value="foydalanuvchi">Foydalanuvchi</option>
              </select>
            </div>

            <div className="btns-section d-flex align-items-center justify-content-center">
              <button className="red-btn me-3" onClick={check}>Bekor qilish</button>
              <button className="yellowBtn ms-3" onClick={()=> setShowModal(false)}>Saqlash</button>
            </div>
          </div>
        </div>
        }

    </>
  )
}

