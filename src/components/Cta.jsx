import React from 'react'

const Cta = () => {
  const linkTelefon = 'tel: +998994780128'

  return (
    <section className='w-[100%] px-5 mx-auto bg-[#0EB4C1]'>
      <div className='max-w-[1110px] h-[223px] px-5 mx-auto'>
        <h3 className='text-4xl font-bold font-sans text-white text-center pt-[34px]'>Qabulga ro’yxatdan o’ting</h3>
        <div className='flex justify-center items-center mt-10'>
          <a className='border py-3 px-6 rounded-lg text-white text-[15px] mr-10' href={linkTelefon} target="_blank" rel="noopener noreferrer">Qo’ng’iroq qilish</a>

          <a className='border py-3 px-6 rounded-lg text-white text-[15px]' href={linkTelefon} target="_blank" rel="noopener noreferrer">Telegramdan yozish</a>
        </div>
      </div>
    </section>
  )
}

export default Cta