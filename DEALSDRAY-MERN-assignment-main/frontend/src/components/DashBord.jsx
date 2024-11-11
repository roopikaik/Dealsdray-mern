import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams, useNavigate } from 'react-router-dom'  // Import useNavigate here
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()
  let navigate = useNavigate();  // Get the navigate function from useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4001/user/${ID.ID}`)
      .then((e) => {
        setname(e.data)
      })
      .catch(() => { console.log("unable to fetch data in Edit comp"); })
  }, [ID.ID])

  // Handle logout
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing session or tokens)
    navigate("/login");  // Redirect to login page
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div id='navbar' className='bg-indigo-600 shadow-md'>
        <ul className='flex justify-between items-center p-4 text-white font-semibold'>
          <li className='text-xl'>Dashboard</li>
          <div className='flex gap-6'>
            <li>
              <Button variant="contained" color="primary">
                <Link to='/create-employee' className="text-white no-underline">Create Employee</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" color="secondary">
                <Link to="/employee-list" className="text-white no-underline">Employee List</Link>
              </Button>
            </li>
            <li className="flex items-center px-3 py-2 bg-red-500 text-white rounded-lg">
              {name}
            </li>
            <li>
              {/* Logout Button */}
              <Button 
                variant="outlined" 
                color="error" 
                className="cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </div>
        </ul>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome to the Admin Panel</h1>
        <p className="text-lg text-gray-700">Here you can manage employees and other admin tasks.</p>
      </div>

      {/* Footer */}
      <div className="bg-indigo-600 text-white p-4 text-center absolute bottom-0 w-full">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default DashBord
