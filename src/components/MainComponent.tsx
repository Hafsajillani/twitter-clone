import { PiDotOutlineFill } from "react-icons/pi";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty, IoMdStats } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";


const MainComponent = () => {
  return (
    <main className="flex w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r border-gray-600">
        <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
          Home
        </h1>
       <div className="border-t-[0.5px] flex items-stretch space-x-2 px-4 py-6  border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
            <input 
              type="text" 
              className="w-full placeholder:text-xl placeholder:text-gray-500 h-full bg-transparent outline-none border-none border-b-[0.5px] border-gray-600 p-4" placeholder="what's happening?"/>
            <div className="w-full justify-between items-center flex">
              <div></div>
              <div className="w-full max-w-[100px]">
                <button className="rounded-full bg-primary px-4 py-2 text-lg w-full text-center hover:bg-opacity-70 transition duration-200 font-bold">Post</button>
              </div>
            </div>
        </div>
       </div>
       <div className="flex flex-col">
            {
            Array.from({length:5}).map((_,i)=>(
                <div key={i} className="border-b-[0.5px] border-gray-600 p-6 flex space-x-4">
                  <div><div className="w-10 h-10 bg-slate-200 rounded-full"/></div>
                  <div className="flex flex-col">
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center w-full space-x-1">
                            <div className="font-bold">Club of Coders</div>
                            <div className="text-gray-500">@clubofcoders</div>
                            <div className="text-gray-500">
                              <PiDotOutlineFill />
                            </div>
                            <div className="text-gray-500">1 hour ago</div>                        
                        </div>
                        <div>
                          <BsThreeDots />
                        </div>
                    </div>
                    <div className="text-white text-base ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate temporibus architecto eius laboriosam deserunt laudantium accusantium, libero at nemo reiciendis eaque voluptatibus officia quos saepe minima natus est rerum ratione doloremque assumenda cum. Amet laboriosam facere deserunt at totam, qui atque reprehenderit animi labore neque fuga eligendi esse quae.
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2">
                    </div>
                    <div className="flex justify-center space-x-20 mt-2 w-full">
                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                          <BsChat />
                        </div>
                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                          <AiOutlineRetweet />
                        </div>
                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                          <IoMdHeartEmpty />
                        </div>
                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                          <IoMdStats />
                        </div>
                        <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                          <IoShareOutline />
                        </div>
                    </div>
                  </div>
                </div>
            ))
            }
       </div>
    </main>
  )
}

export default MainComponent
