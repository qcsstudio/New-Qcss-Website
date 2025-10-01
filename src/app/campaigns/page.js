import Campaigns from '@/component/Campaigns/Campaigns'
import React, { Suspense } from 'react'

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