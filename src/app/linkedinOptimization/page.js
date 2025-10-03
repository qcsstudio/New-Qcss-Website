import React from 'react'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
const LinkedinOptimization =dynamic(()=>import("@/components/LinkedinOptimization/LinkedinOptimization", { suspense: true }))
const page = () => {
  return (
    <>
     <Suspense>
<LinkedinOptimization/>
     </Suspense>
    
    </>
  )
}

export default page