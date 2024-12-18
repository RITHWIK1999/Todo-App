import React from 'react'
import Searchbar from '../Components/Searchbar'
import "./Todo1.css"

function Todo() {
  return (
    <div className='bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 pb-72'>
        <div className=' text-center pt-32'>
        <h1 className='header font-bold text-7xl text-white '>ToDo App </h1>
        </div>
        <div className='px-24 pt-24'>
          <Searchbar/>
        </div>
    </div>
  )
}

export default Todo