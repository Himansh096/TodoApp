import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setMode } from './redux/TaskActions'

function Header() {
    const [darkMode, setDarkMode] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log(user)
    return (
        <div className="header">
            <div className="header_nav">
                <ul>
                    <Link to="/"><li>Home</li></Link>

                    {
                        user ? <><li><a> Hello {user.user.name}</a></li></> :
                            <><Link to="/login"> <li>Login</li></Link><Link to="/signup"><li>Sign Up</li></Link><Link to="/faq"><li>FAQ</li></Link><Link to="/instagram"><li>Instagram</li></Link><Link to="/pagenation"><li>Pagenation</li></Link>

                            </>
                    }
                </ul>
            </div>

            <div className="container">
                <span>{!darkMode ? "🌞" : "🌙"}</span>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => { setDarkMode(!darkMode); dispatch(setMode(!darkMode)) }}></input>
                        <span className="slider round"></span>
                    </label>
                </div>

            </div>

        </div >
    )
}

export default Header



