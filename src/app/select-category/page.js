'use client'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const Page = () => {

    const [students, setStudents] = useState([])
    const [userId, setUserId] = useState(null)
    const [categoryoptions, setCategoryoptions] = useState("")
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()



    const fetchCategories = async () => {
        try {
            const res = await fetch(`/api/quiz-category/list`)
            const data = await res.json()
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("user_Id");
      setUserId(id);
    }

    fetchCategories();
  }, []);
    const fetchStudents = async (id) => {
        try {
            if (id) {
                const res = await fetch(`/api/candidate?id=${id}`)
                if (!res.ok) {
                    throw new Error('Failed to fetch students')
                }
                const data = await res.json()
                console.log(data)
                setStudents(data.candidateData)
            }

        } catch (error) {
            console.error('Error fetching students:', error)
        }
    }



    const handleChange = (e) => {
        const { value, name } = e.target
        setCategoryoptions(value)
    }


    const startQuiz = async () => {
        try {
            if (!categoryoptions) return console.log("Select a Category")
            setIsLoading(true)
            const res = await fetch(`/api/candidate?id=${userId}&catId=${categoryoptions}`, {
                method: "PUT"
            },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
            )

            const jsonData = await res
            if (jsonData?.status == 200) {
                router.push("/quiz")
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error, "===>")
            setIsLoading(false)

        }
    }

    useEffect(() => {
        fetchStudents(userId)
    }, [userId])
    return (
        <>
            <Navbar />
            <div className={`w-full lg:text-[40px] sm:text-4xl text-3xl mt-5 px-2 font-unbounded bg-[#80808075] h-screen`}>
                <div className='max-w-[1280px] mx-auto'>
                    <div className='py-4'>
                        <h2 className='mt-3'>Welcome to QuantamCrafter Studio <span className='text-amber-500'> {students.fullName} </span></h2>
                        <p className='my-3 text-[20px]'>select category to start quiz</p>

                        <select
                            name="careerOption"
                            value={categoryoptions}
                            onChange={handleChange}
                            className="text-[20px]  bg-white mb-5 w-full font-montserrat p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select category Option </option>
                            {
                                categories?.map((item, index) => {

                                    return (
                                        <option key={item?._id} value={item?._id}>{item?.title}</option>
                                    )
                                })
                            }


                        </select>
                        <ul className="mt-3 bg-white rounded p-3 my-3 text-gray-700 list-disc text-[20px] list-inside font-montserrat marker:text-[#F1813B]">
                            <li className='leading-[50px]'>Do not switch tabs or minimize the browser — the quiz will end automatically!</li>
                            <li className='leading-[50px]'>There are 30 questions.</li>
                            <li className='leading-[50px]'>Each question has a 50-second timer.</li>
                           <li className='leading-[50px]'>Do not refresh screen. you can&apos;t re-submit test.</li>
                            <li className='leading-[50px]'>Make sure you have good  internet conectivity</li>
                        </ul>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-[30px]' disabled={isLoading?true:false} onClick={() => startQuiz()}>{isLoading?"Loading..":"Start Quiz"}</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Page