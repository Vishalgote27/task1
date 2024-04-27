"use client"; // This directive tells Vercel to only include this code in the client-side bundle

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Using next/router instead of next/navigation
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const [first, setFirst] = useState([]);
    const router = useRouter();

    // Wrap code accessing localStorage with typeof window check
    const formData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('formData')) : null;
    const vechileData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("vechileData")) : null;

    return (
        <>
            <ToastContainer />
            <div className="relative overflow-x-auto mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Your Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {formData && formData.username}
                            </th>
                            <td className="px-6 py-4  text-gray-900">
                                {formData && formData.mobile}
                            </td>
                            <td className="px-6 py-4 text-gray-900 ">
                                {vechileData && vechileData.category}
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
                }} className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>Submit</button>

                <button onClick={e => {
                    localStorage.clear();
                    // localStorage.setItem('formData', JSON.stringify(userData))
                    router.push("/");
                }} className='text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 w-24'>Next</button>
                {/* <Link href="/Third" className="text-white bg-indigo-500 border-0 py-2  focus:outline-none hover:bg-indigo-600 rounded text-lg mx-5 p-6">Back</Link> */}
            </div>
        </>
    );
};

export default Page;