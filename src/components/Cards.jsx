import React from 'react'

const Cards = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-8'>
        {/* cards */}
        <div className=' rounded-xl relative' >
            {/* overlays */}
            <div className=' w-full h-full absolute bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Sun's out, Bogo's out</p>
                <p className=' px-2'>Through 8/26</p>
                <button className=' w-40 h-8 rounded-full bg-gray-200 items-center text-black p-1 
                border border-white absolute bottom-4  ml-[-80px] '>Order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='food'/>
        </div>
        {/* cards */}
        <div className=' rounded-xl relative' >
            {/* overlays */}
            <div className=' w-full h-full absolute bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className=' px-2'>Added Daily</p>
                <button className=' w-40 h-8 rounded-full bg-gray-200 items-center text-black p-1 
                border border-white absolute bottom-4 ml-[-80px] '>Order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='food'/>
        </div>
        {/* cards */}
        <div className=' rounded-xl relative' >
            {/* overlays */}
            <div className=' w-full h-full absolute bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>We provide Desserts too</p>
                <p className=' px-2'>Tasty treats too</p>
                <button className=' w-40 h-8 rounded-full bg-gray-200 items-center text-black p-1 
                border border-white absolute bottom-4  ml-[-80px]'>Order now</button>
                </div>
                <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='food'/>
        </div>
    </div>
  )
}

export default Cards