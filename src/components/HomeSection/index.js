import React from 'react'
import './HomeSection.scss'
import { useNavigate } from 'react-router-dom'

export default function HomeSection() {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <div className="d-flex align-items-center container py-3 justify-content-between">
            <h2 className='display-1 pt-4 text-white text-center'>Welcome to EXPRESS 24</h2>
            <div className="d-flex align-items-center">
                <button className='btn btn-primary me-4' onClick={()=> {
                    navigate('/main')
                }}>Go to dashboard</button>

                <button className='btn btn-primary' onClick={()=> {
                    navigate('/login')
                }}>Sign In</button>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row imgRow">
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" alt="" />
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row imgRow">
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://hips.hearstapps.com/hmg-prod/images/766/healthyfoodsnoteveryday-main-1508848485.jpg" alt="" />
                </div>
                <div className="col-3 mx-2">
                    <img className="rounded" src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
