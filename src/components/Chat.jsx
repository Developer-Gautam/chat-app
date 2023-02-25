import React from 'react'
import { BsCameraVideo } from "react-icons/bs"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FiMoreVertical } from "react-icons/fi"
import Messages from './Messages'
import Input from './Input'



const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Sourav</span>
        <div className="chatIcons">
          <BsCameraVideo color='white' size={25} />
          <AiOutlineUserAdd color='white' size={25} />
          <FiMoreVertical color='white' size={25} />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat