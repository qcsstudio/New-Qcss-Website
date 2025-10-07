'use client'
import CategoryTab from '@/components/InterviewComponent/CategoryTab'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { QuizCompletionMessage } from '@/components/sayThanks/sayThanks'


const Page = () => {
  const [students, setStudents] = useState([])
  const [userId, setUserId] = useState(null)
  const [completedTest,setCompletedTest]=useState(false)
  const router = useRouter()

  const [activecategory, setActivecategory] = useState("")
   const [catId, setcCtId] = useState("")

  useEffect(() => {

    const id = localStorage.getItem("user_Id")
    setUserId(id)
    // if (id == "undefined" || !id ) {
    //   router.push("/interview")
    // }

  }, [router])

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
        setcCtId(data.candidateData?.categoryId)
      }

    } catch (error) {
      console.error('Error fetching students:', error)
    }
  }

  useEffect(() => {
    fetchStudents(userId)
  }, [userId])
  console.log(catId,"catIdcatIdcatIdcatIdcatIdcatId")
  return (
    <>
      <Navbar />



      <div className='flex '>
        {/* student detail---------- */}
        <div className='lg:w-[25%] xl:w-[20%] h-screen border-r'>
          <div className="">
            {students ? (
              <div className="p-6 w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-unbounded"> Profile</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-lg text-gray-500 font-unbounded">Full Name : </p>
                    <p className="text-base font-medium text-gray-900 font-montserrat">{students.fullName}</p>
                  </div>

                  <div>
                    <p className="text-lg text-gray-500 font-unbounded">Email :</p>
                    <p className="text-base font-medium text-gray-900 font-montserrat">{students.email}</p>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 font-unbounded">CollegeName :</p>
                    <p className="text-base font-medium text-gray-900 font-montserrat">{students.collegeName}</p>
                  </div>
                  <div>
                    <p className="text-lg text-gray-500 font-unbounded">CollegeName :</p>
                    <p className="text-base font-medium text-gray-900 font-montserrat">{students.collegeName}</p>
                  </div>
                  {
                    activecategory &&
                    <div>
                      <p className="text-lg text-gray-500 font-unbounded">Category :</p>
                      <p className="text-base font-medium text-gray-900 font-montserrat">{activecategory}</p>
                    </div>
                  }

                </div>
              </div>
            ) : (
              <p className="text-gray-500">Loading students data...</p>
            )}
          </div>
        </div>

        {/* questions section------------ */}
        {
        students?.result?.status==="Ended" ? <QuizCompletionMessage/> : <div className='w-full '>

          <CategoryTab setActivecategory={setActivecategory} activecategory={activecategory} catId={catId} />
        </div>

        }
       
      </div>


    </>
  )
}

export default Page
