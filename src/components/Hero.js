export default function Hero() {
  return (
    <div className="relative" style={{height: 'calc(100vh - 80px)'}}>
     <video className="absolute top-0 left-0 w-full h-full object-cover" src="/video.mp4" autoPlay muted loop />
     <div className="absolute top-0 left-0 w-full h-full bg-black/[.4]"></div>
    
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-20 text-white">
          <div className="flex flex-col justify-start items-start gap-5">
            <div className=" flex flex-row gap-2 ">
              <p className=" font-medium text-ms">October, 20</p>
              <p className=" font-medium text-ms">Action, Thriller</p> 
            </div>
            <div className=" flex flex-col justify-start items-start">
              <h1 className=" font-extrabold text-5xl">The Snowman</h1>
             
            </div>
            <p className=" font-normal text-ms">Lorem ipsum doloitis foribus. Sed eveniet,
                 culpa autem voluptuas ullam?
            </p>
            <p className=" font-normal text-ms">Lorem ipsum doloitis foribus. Sed eveniet,
                 culpa autem voluptuas ullam?
            </p>
            <div className=" flex flex-row justify-center items-center gap-5">
              <button className="btn text-white font-medium  px-6 bg-red-500">Book a session</button>
              
            </div>
            
            </div>
        </div>
      </div>
  );
}
