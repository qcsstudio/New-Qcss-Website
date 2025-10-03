
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const AIMarketing = dynamic(
  () => import("@/components/AI_Marketing/AIMarketing"),
  { suspense: true }
);
const page = () => {
  return (
    <>
      <Suspense>
        <AIMarketing />
      </Suspense>
    </>
  )
}

export default page