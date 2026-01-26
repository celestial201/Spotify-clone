import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData } from '../assets/assets'
import { songsData  } from '../assets/assets'
import SongItems from './SongItems'
SongItems

const DisplayHome = () => {
  return (
    <>
      <Navbar />
       <div className="mb-4">
        <h1 className="text-2xl font-bold my-5">Featured Albums</h1>
        <div className='flex overflow-auto  '>
           {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}

        </div>

        </div>
          <div className="mb-4">
        <h1 className="text-2xl font-bold my-5">Today's Biggest Hits</h1>
        <div className='flex overflow-auto  '>
           {songsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}

        </div>

        </div>

    </>
  )
}

export default DisplayHome
