import { IoIosSearch } from "react-icons/io";

const RightSidebar = () => {
  return (
    <section className="w-full sticky top-2 mt-2 flex flex-col h-screen items-stretch px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text" 
                placeholder="Search Twitter" 
                className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
              />
              <label 
              htmlFor="searchBox" 
              className="absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary text-gray-500">
                <IoIosSearch className="w-5 h-5"/>
              </label>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-2 px-4">what's happening</h3>
            <div>
              {
                Array.from({length: 5}).map((_, i)=>(
                  <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl transition">
                    <div className="font-bold text-s">#trending ${i + 1}</div>
                    <div className="text-xs text-neutral-400">34.6k</div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-4 px-4">who to follow</h3>
            <div> 
              {
                Array.from({length: 3}).map((_, i)=>(
                  <div key={i} className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
                      <div className="flex flex-col">
                      <div className="font-bold text-white">Other Users</div>
                      <div className="text-gray-500 text-xs">@otherusers123.com
                      </div>
                      </div>
                    </div>
                      <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                        Follow
                      </button>
                  </div>
                ))
              }
            </div>
          </div>
          <div></div>
        </section>
  )
}

export default RightSidebar

