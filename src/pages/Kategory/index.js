import React, { useState } from 'react'
import './Kategories.scss'
import './Kategories.scss'

let myData = [] 

export const MyData = ()=> myData


export default function Kategory() {

    let obj = [
        {
            category: "Супы",
        },
        {
            category: "Салаты",
        },
        {
            category: "Напитки",
        },
    ];
    const [data, setData] = useState(obj);
    const [newData, setNewData] = useState({});
    const [categoryValue, setCategoryValue] = useState('')

    const onChangeCategory = (e) => {
    e.preventDefault();
    setNewData(e.target.value);
    setCategoryValue(e.target.value)
    };

    const addCategory1 = () => {
    console.log(data);
    if(categoryValue) setData([...data, { category: newData }]);

    };

    myData = data


    return (
        <div>
            <div className="row mt-4 me-5 ms-3">
                <input type="text" 
                className="col-12 form-control p-3" 
                placeholder='Kategoriya nomi' 
                value={categoryValue}
                onChange={onChangeCategory}
                />
            </div>

            <div className="row">
                <select className="form-control my-4 col-4">
                    {
                        data?.map((item, i) => {
                            return <option key={i}>{item.category}</option>;
                        })
                    }
                </select>
            </div>

            <div className="text-center"><button className="active addBtn" onClick={()=> addCategory1()} >Qo'shish</button></div>
        </div>
    )
}