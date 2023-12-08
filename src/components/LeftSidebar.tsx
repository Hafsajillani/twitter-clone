import { RiHome7Fill } from "react-icons/ri";
import { FaHashtag, FaRegEnvelope } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegUser, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";


const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon:FaXTwitter
  },
  {
    title: 'Home',
    icon:RiHome7Fill
  },
  {
    title: 'Explore',
    icon:FaHashtag 
  },
  {
    title: 'Notifications',
    icon:GoBell
  },
  {
    title: 'Messages',
    icon:FaRegEnvelope
  },
  {
    title: 'Bookmarks',
    icon:FaRegBookmark
  },
  {
    title: 'Profile',
    icon:FaRegUser
  }
]

const LeftSidebar = () => {
  return (
    <div>
      <section className="absolute w-[320px] left-0 flex sticky top-0 flex-col h-screen items-stretch px-6">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
          {
            NAVIGATION_ITEMS.map((item) => (
              <Link className='hover:bg-white/10 text-lg transition duration-200 flex items-center w-fit justify-center space-x-4 rounded-3xl py-2 px-6' href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div>
                  <item.icon/>
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))
          }
          <button className="rounded-full m-4 bg-primary p-4 text-lg text-center hover:bg-opacity-70 transition duration-200">
            Post
          </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
            <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Club of Coders</div>
              <div className="">@Clubofcoders</div>
            </div>
            </div>
            <div>
              <BsThreeDots/>
            </div>
          </button>
        </section>
    </div>
  )
}

export default LeftSidebar
                                                                                            