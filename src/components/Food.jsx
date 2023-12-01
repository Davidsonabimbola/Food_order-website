import React, { useState } from 'react'
// import {data} from '../data/data.js'


const data = [
    {
      id: 1,
      name: 'Double Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$$',
    },
    {
      id: 2,
      name: 'Bacon Cheeseburger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$',
    },
    {
      id: 3,
      name: 'Mushroom Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
      price: '$$',
    },
    {
      id: 4,
      name: 'Loaded Burger',
      category: 'burger',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
      price: '$$$',
    },
    {
      id: 5,
      name: 'Feta & Spinnach',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 6,
      name: 'Supreme Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 7,
      name: 'Meat Lovers',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 8,
      name: 'Cheese Pizza',
      category: 'pizza',
      image:
        'https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 9,
      name: 'Kale Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 10,
      name: 'Ceasar Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
    {
      id: 11,
      name: 'Loaded Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 12,
      name: 'Fruit Salad',
      category: 'salad',
      image:
        'https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 13,
      name: 'Wings',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$',
    },
    {
      id: 14,
      name: 'Baked Chicken',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      price: '$$$$',
    },
    {
      id: 15,
      name: 'Chicken Tenders',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$',
    },
    {
      id: 16,
      name: 'Chicken Kabob',
      category: 'chicken',
      image:
        'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: '$$$',
    },
  ];
  
   
const Food = () => {
    const [object, setObject] = useState(data)

    // filter types of food
    const filterType = (category)=>{
setObject(
  data.filter((i)=>{
return i.category === category
  })
  )
}

    // filter by price
    const filterPrice = (price)=>{
      setObject(data.filter((i)=>{
        return i.price === price
      }))
    }

  return (
    
    <div className=' max-w-[1640px] mx-auto p-4 py-12'>
<h1 className=' text-orange-400 font-bold text-4xl text-center'>Top rated menu items</h1>

{/* filter rows */}
<div className=' flex md:flex-col lg:flex-row justify-between'>
{/* filter types */}
<div>
    <p className=' font-bold text-gray-700 sm: mr-6'>Filter types</p>
    <div className=' md:mx-auto flex justify-between flex-wrap sm: ml-12'>
    <button onClick={()=>setObject(data)} className=' w-36 h-8 rounded-full text-orange-600 items-center  p-1 h
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>All</button>
<button onClick={() => filterType('burger')} className=' w-36 h-8 rounded-full text-orange-600 items-center  p-1 
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>Burgers</button>
<button onClick={()=>filterType('pizza')} className=' w-36 h-8 rounded-full text-orange-600 items-center  p-1 
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>Pizzas</button>
<button onClick={()=>filterType('salad')} className=' w-36 h-8 rounded-full text-orange-600 items-center  p-1 
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>Salads</button>
<button onClick={()=>filterType('chicken')} className=' w-36 h-8 rounded-full text-orange-600 items-center  p-1 
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>Chicken</button>
</div>
{/* <p>Filter price</p> */}
</div>
{/* filter price */}
{/* <div className=' flex sm:flex-col md:flex-col'> */}
<div>
<p className='  md:font-bold text-gray-700 sm: mr-8'>Filter price</p>
<div className=' flex justify-between w-full flex-wrap'>
<button onClick={()=>filterPrice('$')} className=' w-[100px] h-8 rounded-full text-orange-600 items-center  p-1 h
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>$</button>
<button onClick={()=>filterPrice('$$')} className=' w-[100px] h-8 rounded-full text-orange-600 items-center  p-1 h
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>$$</button>
<button onClick={()=>filterPrice('$$$')} className=' w-[100px] h-8 rounded-full text-orange-600 items-center  p-1 h
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>$$$</button>
<button onClick={()=>filterPrice('$$$$')} className=' w-[100px] h-8 rounded-full text-orange-600 items-center  p-1 h
                border border-orange-600 hover:bg-orange-600  hover:text-white m-1'>$$$$</button>
                </div>
    
</div>
    </div>
    {/* display foods */}
    <div className=' grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
            object.map((i, index)=>(
                <div key={index} className='shadow-lg rounded-lg hover:scale-105 duration-300 rounded-t-lg'>
                    <img className=' w-full object-cover h-[200px]' src={i.image} alt={i.name}/>
                    <div className=' flex justify-between px-2 py-4'>
                    <p className=' font-bold'>{i.name}</p>
                    <p>
                        <span className=' bg-orange-500 text-white p-1 rounded-full'>{i.price}</span>
                    </p>
                </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Food