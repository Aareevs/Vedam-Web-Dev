import React, { useState } from 'react'

const StandardEvents = () => {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText
    }

  return (
    <>
    <div>Enter text here</div>
    <textarea value={text} onChange={handleChange}></textarea>
    </>
  )
}

export default StandardEvents
