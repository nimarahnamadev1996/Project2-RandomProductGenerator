import React from 'react'

const Message = ({count}) => {
  return (
    <div>
       <p className="message-text">You have seen {count} product</p>
    </div>
  )
}

export default Message