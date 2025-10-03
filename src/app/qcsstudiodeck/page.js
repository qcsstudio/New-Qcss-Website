import React from 'react'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
const QcsDeck = dynamic(
  () => import("@/components/QcsDeck/QcsDeck"),
  { suspense: true }
);
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