
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='  h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] ' >
      <div className="py-2 px-4 md:mx-auto max-w-screen-xl lg:py-4 lg:px-6 h-full flex justify-center md:items-start items-center">
          <div className="md:w-2/3 text-center lg:px-12 md:mt-10 mb-10 md:mb-0">
              <div className=' md:h-2/3 w-full justify-center items-center flex'>
                  <img src='/404-computer.svg' alt='' className=' md:w-1/2 w-full h-full object-cover'/>
              </div>
              <p className="mb-4 text-3xl tracking-tight font-bold text-color-1 md:text-4xl ">404 Not Found</p>
              <p className=" mb-4 w-full font-bold text-white md:text-4xl text-5xl">Whoops! That page doesn’t exist.</p>
              <Link href="/" className="inline-flex text-white color-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm md:px-5 md:py-2.5 px-8 py-3.5 text-center my-4">Back to Homepage</Link>
          </div>   
      </div>
    </section>
  )
}


