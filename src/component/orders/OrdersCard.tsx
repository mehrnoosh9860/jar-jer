import React from 'react'

function OrdersCard() {
    const order=[{title:"King Burger",rate:"Rate 8/10 ",img:"/img/Rectangle.png"},{title:"King Burger",rate:"Rate 8/10 ",img:"/img/Rectangle.png"},]
  return (
    <>
    <h2 className='font-bold text-[#BDBDBD] text-xl mb-2'>Recently Pre Orders</h2>
    <div className='flex mx-4'>
    {order.map((item,index)=>( <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4">
    <img className="w-full" src="/img/Rectangle.png" />
    <div className="absolute flex px-6 py-4 bottom-10">
    <img className="w-10 h-10" src="/img/Rectangle 9.png" />
        <div className='flex flex-col'>
                <div className="font-bold text-white text-xl mb-2">King Burger</div>
                <p className="text-white text-base">Rate 8/10  </p>
        </div>
        </div>
</div>))}
</div>
</>
  )
}

export default OrdersCard
