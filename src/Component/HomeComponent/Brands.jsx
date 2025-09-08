import { BrandsData } from '@/Data/BrandsData'
import React from 'react'

const Brands = () => {
    return (
        <>
            <div className='border p-5 '>
                <h2 className='text-[40px] font-bold leading-tight'>
                    QuantumCrafters:<br/>
                    The Growth Engine Behind Modern Brands
                </h2>
                <p className='text-[20px] font-semibold'>
                    We're not just another agency. We're your AI-native growth partner.
                </p>
                <p className='text-[18px] '>At QuantumCrafters Studio, we blend human creativity with AI precision to help brands grow faster, work smarter, and scale effortlessly. From startups chasing traction to
                    enterprises optimizing every touchpoint we turn digital chaos into automated clarity</p>
                    {/* <div>
                        {BrandsData.map(()=>(

                        ))}
                    </div> */}
            </div>
        </>
    )
}

export default Brands