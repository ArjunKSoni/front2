import React, { useState } from "react"
import Authcontext from "./authcontext"

const Authstate = (props) => {
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const [crop, setData] = useState([])
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
        alert(data.message)


    }

    const search = async (search) => {
        const apicall = await fetch(`http://127.0.0.1:5000/nav`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ search: search }),
        })
        let data = await apicall.json()
        console.log(data)
        setData(data)
        console.log(data.status)
    }
    const searchcrop = async (search) => {
        const apicall = await fetch(`http://127.0.0.1:5000/get_crop_info`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                N: search.N,
                P: 45,
                K: search.K,
                ph: search.ph,
                temperature: search.temperature,
                humidity: search.humidity,
                rainfall: search.rainfall
            }),
        })
        let data = await apicall.json()
        console.log(data)
        setData(data)
    }
    const searchsoil = async (search) => {
        const apicall = await fetch(`http://127.0.0.1:5000/get_soil_info`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                N: search.N,
                P: search.P,
                K: search.K,
                ph: search.ph,
                temperature: search.temperature,
                humidity: search.humidity,
                rainfall: search.rainfall,
                label: search.label
            }),
        })
        let data = await apicall.json()
        console.log(data)
        setData(data)
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
        alert(data.message)
    }

    return (
        <Authcontext.Provider value={{ register, token, user, login, setToken, setUser, search, crop, setData, searchcrop, searchsoil }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate