import QcsDeck from '@/component/QcsDeck/QcsDeck'
import React from 'react'
import { Suspense } from 'react'

const page = () => {
  return (
    <>
      <Suspense>

        <QcsDeck />
      </Suspense>
    </>
  )
}

export default page