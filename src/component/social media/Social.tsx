import React from 'react'

function Social() {
    const social=[{href:"/img/facebook.svg"},{href:"/img/youtube.svg"},{href:"/img/twiter.svg"},{href:"/img/instagram.svg"},{href:"/img/linkin.svg"}]
  return (
    
    <div className='flex items-center'>
      {social.map((item,index)=>(<img key={index} src={item.href} className='w-5 h-5 mx-1'/>))}
    </div>
  )
}

export default Social
