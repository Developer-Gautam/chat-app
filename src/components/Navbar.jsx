import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">FakeApp</span>
      <div className="user">
        <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
        <span>Gautam</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar 