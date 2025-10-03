import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
const Campaigns = dynamic(
  () => import("@/components/Campaigns/Campaigns"),
  { suspense: true }
);

const page = () => {
    return (
        <>
            <Suspense>
                <Campaigns/>
            </Suspense>
        </>
    )
}

export default page