import ("../index.css");
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
function Sidebar(){return (<>
<div className="flex bg-gray-100 text-gray-900">
  <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
      
              <aside className="fixed h-screen w-20 flex-col items-center border-r border-black bg-youtubeGray mt-0">
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center ">
                    <GoHome size="20px" color="black"/>
                    <span className="text-black mt-1 text-xs">Home</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <SiYoutubeshorts size="20px" color="black"/>
                    <span className="text-black mt-1 text-xs">Shorts</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <MdSubscriptions size="20px" color="black" />
                    <span className="text-black mt-1 text-xs">Subscriptions</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <SiYoutubemusic size="20px" color="black" />
                    <span className="text-black mt-1 text-xs">Music</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <BiSolidVideos size="20px" color="black" />
                    <span className="text-black mt-1 text-xs">You</span>
                </div>
                <div className="flex flex-col items-center h-[4.5rem] w-full justify-center">
                    <HiDownload size="20px" color="black" />
                    <span className="text-black mt-1 text-xs">Downloads</span>
                </div>
            </aside>
  
 
        
  </aside>
</div></>)}
export default Sidebar;