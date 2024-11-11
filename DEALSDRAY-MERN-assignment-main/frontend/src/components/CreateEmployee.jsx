import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const CreateEmployee = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("")
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState()
    let [designation, setDesignation] = useState()
    let [gender, setGender] = useState("")
    let [course, setCourse] = useState([])
    let [image, setImage] = useState()

    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            name: name,
            email: email,
            phone: phone,
            image: image,
            designation: designation,
            gender: gender,
            course: course
        }

        if (!name || !email || !phone || !designation || !gender || !course || !image) {
            alert("To Create Employee Fill all the fields..!")
        }
        else {
            axios.post("http://localhost:4001/employees", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((e) => { alert(e.data) })
                .catch(() => { console.log("can not register"); })

            navigate("/employee-list")
        }
    }

    let handleCourseChange = (e) => {
        const course1 = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setCourse(course.concat(course1));
        }
        else {
            setCourse(course.filter(item => item !== course1));
        }
    };

    return (
        <div className='max-w-3xl mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg'>
            <h1 className='text-center text-3xl font-semibold text-blue-600 mb-6'>Create Employee</h1>
            <div className='space-y-5'>
                <input className='w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input className='w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input className='w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                <div>
                    <label className='text-lg font-medium'>Designation</label>
                    <select onChange={(e) => { setDesignation(e.target.value); }} className="block w-full p-3 mt-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>

                <div>
                    <label className='text-lg font-medium'>Gender</label>
                    <div className='flex items-center space-x-5 mt-2'>
                        <label>
                            <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={() => setGender("Male")} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={() => setGender("Female")} />
                            Female
                        </label>
                    </div>
                </div>

                <div>
                    <label className='text-lg font-medium'>Courses</label>
                    <div className='flex items-center space-x-5 mt-2'>
                        <label>
                            <input type="checkbox" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
                            MCA
                        </label>
                        <label>
                            <input type="checkbox" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
                            BCA
                        </label>
                        <label>
                            <input type="checkbox" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
                            BSC
                        </label>
                    </div>
                </div>

                <div>
                    <label className='text-lg font-medium'>Upload your photo</label>
                    <input accept="image/jpeg, image/png" type="file" onChange={(e) => { setImage(e.target.files[0]) }} className='w-full p-3 mt-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div className='text-center'>
                    <button onClick={formHandle} className='w-full py-3 mt-6 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300'>
                        Register Me
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployee
