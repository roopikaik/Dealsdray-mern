import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const EmployeeList = () => {
    let [infoFromDB, setinfoFromDB] = useState([])
    let [reload, setReload] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:4001/employee-list")
            .then((e) => {
                setinfoFromDB(e.data)
            })
            .catch((e) => {
                console.log("error from EmployeeList useEffect");
            })
        setReload(1)
    }, [reload])

    let deleteUser = (e) => {
        axios.delete(`http://localhost:4001/employee-list/${e}`)
        setReload(2)
    }

    return (
        <div className="w-full p-6 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
            <div className="overflow-x-auto bg-white rounded-lg shadow-xl p-6">
                <p className="text-xl font-semibold mb-4">Total Employees: {infoFromDB.length}</p>
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-200 text-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left font-medium">Unique Id</th>
                            <th className="px-6 py-3 text-left font-medium">Image</th>
                            <th className="px-6 py-3 text-left font-medium">Name</th>
                            <th className="px-6 py-3 text-left font-medium">Email</th>
                            <th className="px-6 py-3 text-left font-medium">Phone</th>
                            <th className="px-6 py-3 text-left font-medium">Designation</th>
                            <th className="px-6 py-3 text-left font-medium">Gender</th>
                            <th className="px-6 py-3 text-left font-medium">Course</th>
                            <th className="px-12 py-3 text-center font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {infoFromDB.map((item, i) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="border-t border-b border-gray-300 px-6 py-4">{i + 1}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">
                                    <img src={`backend/Images/${item.image}`} alt={item.name} className="w-16 h-16 rounded-full" />
                                </td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.name}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.email}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.phone}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.designation}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.gender}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4">{item.course[0]}, {item.course[1]}</td>
                                <td className="border-t border-b border-gray-300 px-6 py-4 flex justify-center items-center space-x-2">
                                    <Link to={`/edit-employee/${item._id}`} className="text-blue-600 hover:text-blue-800">Edit</Link>
                                    <Button variant="outlined" color="error" onClick={() => { deleteUser(item._id) }}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList;
