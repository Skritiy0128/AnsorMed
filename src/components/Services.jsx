import React from 'react'
import { xizmatlar } from '../data.js'

const Services = () => {
  return (
    <section className='py-[120px]'>
      <div className='w-[100%] max-w-[1110px] px-5 mx-auto'>
        <h2 className='text-[#000] text-center text-4xl font-bold leading-[43.2px] mb-14'>Xizmatlar</h2>
        <ul className='space-y-20'>
          {
            xizmatlar.map((xizmat) => {
              return (
                <li className='flex items-center'>
                  <img className='w-[200px] h-[200px]' src={xizmat.rasm} alt={xizmat.sarlavhasi} />
                  <div className='mi-16'>
                    <h3 className='text-[#444] text-2xl  font-bold leading-[28.8px] mb-6'>
                      {xizmat.sarlavhasi}
                    </h3>
                    <p className='text-[#444] text-base leading-6'>
                      {xizmat.matn}
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='flex justify-center items-center mt-[60px]'>
        <button className='text-white bg-red-600 font-bold font-sans text-base py-3 px-6 rounded-lg'>Qabulga yozilish</button>
      </div>
    </section>
  )
}

export default Services