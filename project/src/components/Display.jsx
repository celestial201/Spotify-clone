import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef()
  const location = useLocation()

  const isAlbum = location.pathname.includes('/Albums/')
  const albumId = isAlbum ? location.pathname.split('/').pop() : null

  const bgColor =
    isAlbum && albumsData[albumId]
      ? albumsData[albumId].bgColor
      : undefined

      useEffect(() => {
        if(isAlbum) {
          displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
        }
        else{
          displayRef.current.style.background = `linear-gradient(#121212, #121212)`
        }

      }, [bgColor]);

  return (
    <div ref={displayRef} className="w-full px-6 pt-4 pb-[90px] rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/Albums/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
