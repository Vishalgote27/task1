"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const page = () => {
    const [first, setfirst] = useState([])
    const router = useRouter()
    const formData = JSON.parse(localStorage.getItem('formData', "vechileData"));
    const vechileData = JSON.parse(localStorage.getItem("vechileData"));




    return <>



        <ToastContainer />

        <div class="relative overflow-x-auto mt-10">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Your Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Mobile
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {formData.username}
                        </th>
                        <td class="px-6 py-4  text-gray-900">
                            {formData.mobile}
                        </td>
                        <td class="px-6 py-4 text-gray-900 ">
                            {vechileData.category}
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>


        <div className='text-center mt-5'>
            <button onClick={e => {
                // localStorage.clear()
                toast.success("SuccessFully")
                // localStorage.setItem('formData', JSON.stringify(userData))
                // router.push("/")
            }} className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>Sumbit</button>
            <button onClick={e => {
                localStorage.clear()
                // localStorage.setItem('formData', JSON.stringify(userData))
                router.push("/")
            }} className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>Next</button>
            {/* <Link href="/Third" className="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 p-6">Back</Link> */}
        </div >







    </>
}

export default page