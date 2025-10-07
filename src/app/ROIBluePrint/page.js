import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
const RoiBluePrint = dynamic(
  () => import("@/components/RoiBluePrint/RoiBluePrint"),
  { suspense: true }
);
const page = () => {
  return (
    <>
    <Suspense>
        <RoiBluePrint/>
    </Suspense>
    </>
  )
}

export default page