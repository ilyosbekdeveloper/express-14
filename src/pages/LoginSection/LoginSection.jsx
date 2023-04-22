import React, { useContext, useState } from 'react'
import './LoginSection.scss'
import { LogInContext } from '../../context/LogInContext'
import { useNavigate } from 'react-router-dom'

export default function LoginSection() {
    const {isLogin, setLogin} = useContext(LogInContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSmall, setSmall] = useState(false)

    const changeInputValue1 = (e)=> setEmail(e.target.value)
    const changeInputValue2 = (e)=> setPassword(e.target.value)

    return (
    <div className='loginSection'>
        <form>
            <h3 className="text-center my-3">Register for EXPRESS 24</h3>
            <div className="email">
                <label htmlFor="email">Enter Your email</label>
                <input type="email" value={email} onChange={changeInputValue1} id="email" placeholder='email...'/>
                <label htmlFor="password">Enter Your email password</label>
                <input type="password" value={password} onChange={changeInputValue2} id="password" placeholder='password...'/>
            </div>

            <input 
            type="button"
            className='btnSign' 
            value={'SIGN IN'}
            onClick={()=>{
                if(email && password){
                    setLogin(true)
                    navigate('/main')
                }else{
                    setSmall(true)
                }
            }}
            />

        {isSmall && <small>pleace enter your password and email</small>}
        </form>
    </div>
  )
}
