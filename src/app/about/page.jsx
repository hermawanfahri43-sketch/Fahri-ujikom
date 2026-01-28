"use client"

const PageAbout  = ()=>{
    return(
        <div className="flex flex-wrap items-center justify-evenly bg-slate-600 h-screen hover:bg-black transition-all duration-1000">

            <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black hover:scale-125 delay-200">
                suara 1
            </div>

              <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black hover:animate-bounce">
                suara 2
            </div>

              <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black hover:animate-spin">
                suara 3
            </div>

               <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black hover:animate-ping">
                suara 4
            </div>

            <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black hover:animate-pulse">
                suara 5
            </div>

            <div className=" flex justify-center items-center w-44 h-44 p-8 bg-red-600/80 text-white text-2xl font-bold rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-black">
                suara 6
            </div>
        </div>
    )
}

export default  PageAbout
