import React from 'react'
import "/src/app/style.css";
function SearchBox() {
  return (

    <div className="relative">
      <input
        type="text"
        className="w-4/5 pr-10 py-2 px-3 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      <button className="absolute inset-y-0 right-0 px-4 py-2 bg-[#323232] inputborderfancy text-white ">
        Search
      </button>
    </div>
    


  )
}

export default SearchBox
