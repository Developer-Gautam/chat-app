import React from 'react'
import { GrAttachment } from "react-icons/gr"
import { BiImageAdd } from "react-icons/bi"

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type Something' />
            <div className='send'>
                <GrAttachment size={22} opacity={"70%"} cursor={"pointer"} />
                <input type="file" style={{ display: "none" }} id="file" />
                <label>
                    <BiImageAdd size={28} opacity={"70%"} cursor={"pointer"} />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input