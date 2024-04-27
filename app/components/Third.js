"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import work from "./../assets/svg/work.svg"


const Third = () => {
    const router = useRouter()
    const [userData, setUserData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })


    }

    const formik = useFormik({
        initialValues: {
            username: '',
            mobile: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required(' Name is Required'),
            mobile: Yup.string()
                .min(10, 'Must be at least 10 characters')
                .required('mobile Required'),

        }),
        onSubmit: (values, { resetForm }) => {
            localStorage.setItem('formData', JSON.stringify(values))

            router.push("/components/second")
            // toast.success("Register Success")
        },
    })

    return <>

        <div class="grid lg:grid-cols-2 md:grid-cols-2   ">

            <div className=" flex  justify-center items-center">
                <img className="w-96" src='https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?t=st=1714208935~exp=1714212535~hmac=dc1ccba69f341bfef9b9fd78160ba7c3c04ce5c9d6d6e61dfc9687cc232e89e6&w=740' />
            </div>
            <form onSubmit={formik.handleSubmit}>

                <div className='md:h-screen   flex flex-col  justify-center bg-slate-100 '>
                    {/* <div class=" mb-4 mx-5">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input onChange={handleChange} type="text" id="full-name" name="fullname" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                    </div> */}

                    <div class=" mb-4 mx-24">
                        <label for="username" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input {...formik.getFieldProps("username")} type="text" id="username" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.username}</div>
                        ) : null}
                    </div>


                    {/* <div class=" mb-4 mx-5">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input onChange={handleChange} type="text" id="full-name" name="mobile" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div> */}



                    <div className="mb-4 mx-24">
                        <label htmlFor="mobile" className="block text-gray-700 text-sm  mb-2">mobile</label>
                        <input
                            type="text"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            id="mobile"
                            {...formik.getFieldProps('mobile')}
                        />
                        {formik.touched.mobile && formik.errors.mobile ? (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.mobile}</div>
                        ) : null}
                    </div>






                    <div className='text-center'>
                        {/* <Link href="/components/second" onClick={e => localStorage.setItem('formData', JSON.stringify(userData))} class="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24">Submit</Link> */}
                        <button onClick={e => {
                            // localStorage.setItem('formData', JSON.stringify(userData))
                            // router.push("/components/second")
                            // toast.success("Register Success")
                        }} type='submit' className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>Login</button>
                    </div>

                </div>


            </form>
        </div>

    </>
}

export default Third