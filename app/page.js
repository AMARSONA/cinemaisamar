
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 text-white h-[60vh] w-[75vw] relative left-[100px] items-start px-5 md:px-0 text-xs md:text-base max-sm:left-[15vw] max-sm:h-[70vh]">
        <div className="font-bold flex gap-6 md:text-5xl justify-center items-center max-md:flex-col">
          <span className="text-8xl text-white max-md:text-center max-sm:text-6xl max-sm:items-center">Cinema is Amar</span>
          <span><img className="invertImg md:size-24" src="/cinema.gif" width={52} alt="" /></span></div>
        <p className="text-center md:text-left text-white text-4xl font-semibold max-sm:text-2xl">
          Your one stop solution to cringe movie reviews,web series reviews,music and a lot of cinema talk ..
        </p>

        <p className="text-center md:text-left text-2xl font-semibold max-sm:text-xl max-md:mx-auto">Want to know more? Click on...</p>
        <div className="flex max-md:mx-auto max-sm:flex-col">
          <Link href={"/login"}>

            <button type="button" className="text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href="/about">
            <button type="button" className="text-white bg-transparent border-2 hover:bg-gray-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>

      <div className="bg-white h-1 w-[85vw] mx-auto"></div>

      <div className="text-white container mx-auto pb-20 pt-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-14 text-white">If you like my efforts, you can support me by</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-white" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center text-white">Watch my videos</p>
            <p className="text-center w-[20vw] text-white">I provide interesting reviews on indian movies and web series and sometimes they are funny!</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-white" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center text-white">Reward vs Efforts</p>
            <p className="text-center w-[20vw] text-white">If you like my efforts, you can support me financially and let me know which video made you laugh out loud !</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-white" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center text-white">Collaborate for fun</p>
            <p className="text-center w-[20vw] text-white">We can collaborate to make fun, interesting and insightful videos and make our content reach every house hold!</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 w-[85vw] mx-auto"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14 text-white">Visit my cringe YouTube Videos</h2>
        {/* Responsive youtube embed  */}
        <div className="flex sm:flex-col sm:w-[85vw] flex-row sm:items-center xl:h-[40vh] xl:flex-row xl:justify-evenly sm:justify-between sm:h-[65vh] max-sm:flex-col max-sm:h-[55vh] max-sm:justify-between">
          <div className="w-[90%] h-[40vh] lg:w-[70vw] md:h-[30vh] xl:w-[30%] xl:h-[40vh] sm:h-[30vh] max-sm:w-[80vw] max-sm:h-[25vh]  flex justify-between">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/nTLn191qmEw" title="HOUSEFULL 5 Movie Review" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <div className="w-[90%] h-[40vh] lg:w-[70vw] md:h-[30vh] xl:w-[30%] xl:h-[40vh] sm:h-[30vh] max-sm:w-[80vw] max-sm:h-[25vh] flex justify-between">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/XfIzIg5q6HA" title="TARA SINGH ULTRO PRO MAX?? JAAT MOVIE REVIEW ||" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          
        </div> 




      </div>
    </>
  );
}