
import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{height: 'calc(110vh -  80px'}}>
    
    <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6 h-full flex justify-center items-start">
        <div className="w-2/3 text-center lg:px-12 mt-10">
            <div className='w-full h-2/3 justify-center items-center flex'>
                <img src='/404-computer.svg' alt='' className=' w-1/2 h-full object-cover'/>
            </div>
            <p className="mb-4 text-2xl tracking-tight font-bold text-color-1 md:text-4xl ">404 Not Found</p>
            <p className=" mb-4 w-full font-bold text-white text-4xl ">Whoops! That page doesn’t exist.</p>
            <Link href="/" className="inline-flex text-white color-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</Link>
        </div>   
    </div>
    </section>
  )
}


