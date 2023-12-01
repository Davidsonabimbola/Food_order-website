import { useState } from "react" 


const Navbar = () => {
    const [item, setItem] = useState(false)

    const toggleMenu = ()=>{
        setItem(!item)
    }
    

  return (
    <div className=' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className=' flex gap-2 items-center'>
        <div onClick={toggleMenu} className=' flex flex-col items-center gap-1 cursor-pointer '>
            <div className=' bg-black w-6 h-1 rounded-md'></div>
            <div className=' bg-black w-6 h-1 rounded-md'></div>
            <div className=' bg-black w-6 h-1 rounded-md'></div>
            </div>
            
            <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className=' font-bold text-2xl text-zinc-950'>Eats</span></h1>
            
            <div className=' hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className=' bg-black text-white rounded-full p-2'>Delivery</p>
                <p className=' p-2'>Pickup</p>
            </div>
            </div>
            {/* search*/}
            <div className=' w-[200px] sm:w-[200px] md:w-[500px] h-8 bg-gray-400 rounded-full flex items-center px-2 relative
            ml-[-10px] mr-3'>
                <img src='../searchicon.png' alt='search'/>
                <input className=' bg-transparent focus:outline-none w-full' placeholder='search' type='text'/>
</div>
        {/* cart button */}
        <button className=' flex items-center h-12 md:w-40 w-[120px] mr-2 justify-center gap-1 bg-black text-white rounded-2xl'>
            <img className=' w-8 h-8 sm: justify-center flex  ' src='../cart.png' alt='cart' />
            <p className=" hidden md:flex ">Cart</p>
            {/* <p className=" sm: pr-3">Cart</p> */}
        </button>

{/* mobile menu */}
{/* overlay */}
{
    item? (<div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>


 {/* side drawer */}
<div className= {item? ' top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 relative':
    'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
}> 
    
    <div className=' cursor-pointer'>
        <div 
        className=' flex items-center pt-3 justify-between'>
        <h2 className=' ml-7 text-2xl'>Best<span className='font-bold'>Eats</span></h2>
        <img onClick={toggleMenu} src='../close.png' alt='close' className=' w-6 h-6'/>
        </div>
        <nav>
            <ul className=' flex flex-col p-4 text-gray-800'>
            <li className=' flex items-center p-3 mr-4 gap-3 '>
                <img src='../order.png' alt='order' className=' w-6 h-6'/>
                <span>orders</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../favourite.png' alt='order' className=' w-6 h-6'/>
                <span>favourite</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../wallet.png' alt='order' className=' w-6 h-6'/>
                <span>wallet</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../help.png' alt='order' className=' w-6 h-6'/>
                <span>help</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../promotions.png' alt='order' className=' w-6 h-6'/>
                <span>promotions</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../bestseller.png' alt='order' className=' w-6 h-6'/>
                <span>best seller</span>
            </li>
            <li className=' flex items-center p-3 mr-4 gap-3'>
                <img src='../friendsinvite.png' alt='order' className=' w-6 h-6'/>
                <span>invite friends</span>
            </li>
            </ul>
        </nav>
    </div>
    </div> 
    </div>) : ''
}
    



                

        
        
    </div>
  ) 
}

export default Navbar