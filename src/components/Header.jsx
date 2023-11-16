import React from 'react'
import logo from '../img/ansormed.png'
const Header = () => {
  return (
    <div className='w-[100%] max-w-[1110px] px-5 mx-auto flex justify-between items-center pt-6 pb-6'>
      <div className='flex items-center'>
        <img src={logo} alt="" />
        <h1 className='m-4 text-2xl font-bold font-sans'>AnsorMed</h1>
      </div>
      <div>
        <nav>
          <ul className='flex space-x-8 font-bold font-sans text-base'>
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
      <button className='text-white bg-red-600 font-bold font-sans text-base py-3 px-6 rounded-lg'>Qabulga yozilish</button>
    </div>
  )
}

export default Header