import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import { TextField, Box, Paper } from '@mui/material';

const Login = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let navigate = useNavigate()

  let login = () => {
    let payload = { email, password }
    axios.post('http://localhost:4001/login', payload)
      .then((e) => {
        if (e.data.status === "success") {
          navigate(`/dashbord/${e.data.id}`)
        }
        else if (e.data.status === "fail") {
          alert("Wrong password")
        }
        else if (e.data.status === "noUser") {
          alert("Invalid Email")
        }
      })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <Paper className="max-w-md w-full p-8 shadow-xl rounded-lg bg-white">
        <h1 className="text-center font-bold text-3xl text-indigo-700 mb-6">Login Form</h1>
        <div className="space-y-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className="bg-yellow-100"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className="bg-yellow-100"
          />
          <Box className="flex justify-between items-center">
            <Button
              variant="contained"
              color="primary"
              onClick={login}
              className="w-full py-2 mt-4 bg-indigo-600 text-white font-semibold"
            >
              Login
            </Button>
          </Box>
          <div className="text-center">
            <p className="mt-4 text-gray-600">Don't have an account? 
              <Button variant="outlined" color="primary" className="ml-2">
                <Link to='/register' className="no-underline text-indigo-600">Sign Up</Link>
              </Button>
            </p>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Login
