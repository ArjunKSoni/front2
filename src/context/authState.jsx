import React, { useState } from "react"
import Authcontext from "./authcontext"

const Authstate = (props) => {
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const [message, setMessage] = useState()
    const register = async (reg) => {
        const apicall = await fetch(`https://backend-p.up.railway.app/api/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ user: reg.user, email: reg.email, password: reg.password, mobileNo: reg.mobile }),
        })
        let data = await apicall.json()
        console.log(data)
        setToken(data.authToken)
        setUser(data.user)
        setMessage(data.message)
    }
    const login = async (reg) => {
        const apicall = await fetch(`https://backend-p.up.railway.app/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ email: reg.email, password: reg.password }),
        })
        let data = await apicall.json()
        console.log(data)
        setToken(data.authToken)
        setUser(data.user)
        setMessage(data.message)
    }

    return (
        <Authcontext.Provider value={{ register, message, token, user, login, setToken, setMessage, setUser }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate