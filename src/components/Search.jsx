import React from 'react'
import { FiSearch } from "react-icons/fi"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm" style={{display:"flex",alignItems:"center",gap:'8px',color:"#dddd6"}}>
        <FiSearch color='white'/>
        <input type="text" placeholder='Find a user' />
      </div>

      <div className='userChat'>
        <img src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59094779-stock-illustration-profile-icon-male-avatar.jpg" alt="" />

        <div className='userChatInfo'>
          <span>Aman</span>
          <p>Hello, I am first person in this app.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Search