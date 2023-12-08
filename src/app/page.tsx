import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex text-white justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSidebar/>
        <MainComponent/>
        <RightSidebar/>
      </div>
    </div>
  )
}
 
 export default Home
 
