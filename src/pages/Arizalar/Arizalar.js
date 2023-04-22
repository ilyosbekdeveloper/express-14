import React from 'react'
import { Link } from 'react-router-dom'
import './Arizalar.scss'
import { Container } from 'react-bootstrap'
import Arizalardata from '../../data/arizalar'

export default function Arizalar() {

  const ArizlarDatas = Arizalardata();

  return (
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
              <td>Taom nomi</td>
              <td>Narxi</td>
              <td>Soni</td>
              <td>Umumiy Narx</td>
              <td>Telefon Raqami</td>
              <td>Izoh</td>
            </tr>
          </thead>

          <tbody>
            {
              ArizlarDatas.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.taom}</td>
                  <td>{item.price}</td>
                  <td>{item.price}</td>
                  <td>{item.umumiyNarx}</td>
                  <td>{item.number}</td>
                  <td>{item.comment}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className="count">
          <div className="left-count">Jami</div>
          <div className="right-count">182 000 so'm</div>
        </div>
      </Container>
    </div>
  )
}
