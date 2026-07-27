import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
  const params = useParams();
  const uniqueId = params.uniqueId || "unknown-user";

  return (
    <div className="p-6 text-xl">Chat page for {uniqueId}</div>
  )
}

export default Chat