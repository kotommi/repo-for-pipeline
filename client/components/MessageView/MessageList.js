import React from 'react'

const liStyle = {
  flexdirection: 'row',
  margin: 5,
  padding: 5,
}

const spacingStyle = {
  margin: 5,
  padding: 5,
}

const MessageList = ({ messages, deleteMessage }) => {
  if (!messages) return null

  const handleDelete = (message) => () => {
    deleteMessage(message)
  }

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <div style={liStyle}>
            {message.body}
            <button style={spacingStyle} type="button" onClick={handleDelete(message)}>
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MessageList
