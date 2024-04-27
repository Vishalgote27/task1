"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const router = useRouter()
    const [vechile, setVechile] = useState({ category: "", })

    // useEffect(() => {
    //     toast.success("SuccesssFully")
    // }, [])
    return <>
        <ToastContainer />
        <form class="mt-10 max-w-sm mx-auto">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select value={vechile.category} onChange={e => setVechile({ ...vechile, category: e.target.value })} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Choose a vehicle</option>
                <option value="Hero">Hero</option>
                <option value="Bajaj">Bajaj</option>
                <option value="Tvs">Tvs</option>
                <option value="Bullet">Bullet</option>
            </select>
        </form>

        <div className=' text-center mt-5'>
            <button onClick={e => {
                localStorage.setItem('vechileData', JSON.stringify(vechile))
                router.push("/components/frist")
            }} className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>next</button>
            {/* <Link href="/components/frist" onClick={e => localStorage.setItem('vechileData', JSON.stringify(vechile))} class="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24">NEXT</Link> */}
        </div>




    </>
}

export default Page 