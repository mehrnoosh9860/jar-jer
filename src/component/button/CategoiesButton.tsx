import React from 'react'

function CategoiesButton() {
    const categories=[{name:"pizza",href:"/img/pizza.png"},{name:"Burger",href:"/img/Burger.png"},{name:"Sand",href:"/img/Sandwich.png"},{name:"Chicken",href:"/img/Chicken.png"},{name:"Pasta",href:"/img/Pasta.png"},{name:"Dessert",href:"/img/Dessert.png"},]
  return (
    <>
    <h2 className='font-bold text-[#BDBDBD] text-xl'>Popular Category</h2>
    <div className='flex items-center justify-center'>
        {categories.map((item,index)=>(  <button key={index} className="grid justify-items-center bg-gray-400 py-7 px-1 mx-2 rounded-full">
        <img className="max-w-8" src={item.href} />
        <div >
            <span >{item.name}</span>
   
        </div>
    </button>))}
    </div>
    </>
  )
}

export default CategoiesButton
