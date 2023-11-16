import React from 'react'
import logo from '../img/ansormed.png'

const Footer = () => {
  return (
    <div className='w-[100%] bg-[#222222]'>
      <div className=' max-w-[1110px]  px-5 mx-auto flex justify-between items-center pt-6 pb-6'>
        <div className='flex items-center'>
          <img src={logo} alt="" />
          <h1 className='m-4 text-2xl font-bold font-sans text-white'>AnsorMed</h1>
        </div>
        <div>
          <nav>
            <ul className='flex space-x-8 font-bold font-sans text-base text-white'>
              <li className='hover:text-red-600 duration-150'>
                Xizmatlar
              </li>
              <li className='hover:text-red-600 duration-150'>
                Dorilar
              </li>
              <li className='hover:text-red-600 duration-150'>
                Asal
              </li>
              <li className='hover:text-red-600 duration-150'>
                Kontaktlar
              </li>
              <li className='hover:text-red-600 duration-150'>
                Blog
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer