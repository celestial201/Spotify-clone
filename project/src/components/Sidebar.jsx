import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

const navigate = useNavigate();


  return (
    <div className="w-[25%] h-screen bg-[#121212] p-4 flex flex-col text-white hidden lg:flex">
      {/* Home Button */}
      <div onClick={()=>navigate('/')} className="flex items-center gap-3 cursor-pointer mb-4">
        <img className="w-6 " src={assets.home_icon} alt="Home" />
        <p className="font-bold">Home</p>
      </div>

      {/* Search Button */}
      <div className="flex items-center gap-3 cursor-pointer mb-4">
        <img className="w-6 " src={assets.search_icon} alt="Search" />
        <p className="font-bold">Search</p>
      </div>

      {/* Library Section */}
      <div className='bg-[#121212] h-[85%] rounded p-4 flex flex-col gap-4'>
        {/* Your Library with Icons */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Create Playlist Card */}
        <div className="bg-[#242424] rounded p-4 flex flex-col items-start gap-2 w-full max-w-xs">
          <h1 className="text-white font-semibold text-lg">Create your first playlist</h1>
          <p className="text-gray-400 text-sm">It's easy, we will help you</p>
          <button className="mt-2 px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium">
            Create Playlist
          </button>
        </div>
         <div className="bg-[#242424] rounded p-4 flex flex-col items-start gap-2 w-full max-w-xs">
          <h1 className="text-white font-semibold text-lg">Lets find some podcast to follow</h1>
          <p className="text-gray-400 text-sm">we will keep you updates on new episodes</p>
          <button className="mt-2 px-4 py-1.5 bg-white text-black rounded-full text-sm font-medium">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
