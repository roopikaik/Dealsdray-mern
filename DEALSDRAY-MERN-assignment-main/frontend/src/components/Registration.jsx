import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm = () => {
        let payload = {
            name, email, cnfPassword
        }
        if (!name || !email || !cnfPassword) {
            alert("To register, fill all the fields..!")
        }
        else {
            if (password === cnfPassword) {
                axios.post('http://localhost:4001/register', payload)
                    .then((e) => {
                        alert(e.data);
                        navigate("/")
                    })
                    .catch((e) => {
                        alert("Problem in sending data to the Backend.!");
                    })
            }
            else {
                alert("Both passwords should match..")
            }
        }
    }

    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">Admin Registration Form</h1>
                <div className="space-y-4">
                    <input
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Full Name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        required
                    />
                    <input
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Email"
                        type="text"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                    <input
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Password"
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <input
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Retype Password"
                        type="password"
                        value={cnfPassword}
                        onChange={(e) => { setCnfPassword(e.target.value) }}
                    />
                    <button
                        className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                        onClick={submitForm}
                    >
                        Register Me
                    </button>
                </div>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Button variant="outlined" className="text-indigo-600">
                        <Link to="/" className="no-underline">Sign In</Link>
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Registration;
