import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { MyData } from '../Kategory'


export default function Qoshish() {

  const [selectImg, setSelectImg] = useState('')
  const [foodName, setFoodName] = useState([])
  const [inputTextFood, setInputTextFood] = useState("");
  const [inputTextPrice, setInputTextPrice] = useState("");
  const [inputTextTarif, setInputTextTarif] = useState("");

  const addFood = () => {
    if (inputTextFood.trim() !== "" & inputTextPrice.trim() !== "") {
      const newTodo = {
        id: foodName.length + 1,
        text: inputTextFood,
        price: inputTextPrice,
        img: selectImg,
        tarif: inputTextTarif,
      };
      setFoodName([...foodName, newTodo]);
      setInputTextFood("");
      setInputTextPrice("");
      setSelectImg("");
      setInputTextTarif("");
    }
  };


  const customImg = 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528';

  const myNewData = MyData()

  const myDataObj = myNewData
  return (
    <>
      <Container className='px-3 py-2'>

        <div className="row">
          <input type='text' 
            placeholder="Rasmga yo'l" value={selectImg} 
            onChange={e=> setSelectImg(e.target.value)} 
            className="col-6 me-2 section-for-img"
          />

          <input 
            placeholder='Taom nomi' 
            id='avatar' name='avatar' 
            className="col-6 ms-2 section-for-img"
            value={inputTextFood} onChange={e=> setInputTextFood(e.target.value)}
          />
        </div>

        <div className="row mt-3">
          <textarea placeholder="Ta'rif" value={inputTextTarif} 
            onChange={e=> setInputTextTarif(e.target.value)} 
            className='textarea col-12' cols="30" rows="10">
          </textarea>
        </div>

        <div className="row">
          <div className="col-6 p-0 mt-3">
          <input 
          type='number'
            placeholder='Narxi'
            className="narxi"
            value={inputTextPrice} onChange={e=> setInputTextPrice(e.target.value)}
          />
          </div>
          <div className="col-6 p-0 mt-0 por">
          <select className='narxi mt-3'>
              {
                myDataObj.map((item, i) => {
                  return <option key={i}>{item.category}</option>;
            })}
          </select>
          </div>
        </div>

        <div className="text-center">
          <button className="yellowBtn"
          onClick={()=>{
            addFood()
          }}
          >Qo'shish</button>
        </div>
      </Container>
      
      <div className="row nowrap">
        
        {
          foodName.map((item, index) => (
            <div key={index} className="col-3 p-0 box">
              <div className="img-section"><img 
                className='rounded' src={item.img === '' && customImg || item.img } 
                alt="bu yerda rasm bo'lishi mumkin edi" />
              </div>
              <div className="description">
                <div className="box-title">{item.text}</div>
                <span className="box-dec">{item.price} so'm</span>

                <p className="tarif">{item.tarif}</p>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}