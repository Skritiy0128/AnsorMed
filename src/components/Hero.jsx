import React from 'react'
import Doktor from '../img/hero-img.png'

const Hero = () => {
  return (
    <div className='w-[100%]  px-5 mx-auto bg-[#0EB4C1]'>
      <div className='max-w-[1110px]  px-5 mx-auto flex justify-evenly items-center'>
        <div>
          <h3 className='text-4xl font-bold font-sans text-white mt-[120px]'>Tabiiy davolash usullari yordamida <br /> kasalliklardan xalos bo’ling.</h3>
          <p className=' font-light text-white text-lg mt-4 mb-9'>Hijoma, manual terapiya, zuluk va turli tabiiy <br />
            giyohlar eng ko’p uchraydigan kasalliklarni <br />
            yengishda yordam beradi. Sog’ligingizni o’z ishining <br />
            professionallariga ishonib topshiring.</p>
          <button className='text-white bg-red-600 font-bold font-sans text-base py-3 px-6 rounded-lg'>Qabulga yozilish</button>
        </div>
        <div>
          <img className='mt-[29px]' src={Doktor} alt="doktor" />
        </div>
      </div>
    </div>
  )
}

export default Hero