import React, { memo } from 'react'

const Child = ({ fun }) => {
    console.log('Child Component Render')
  return (
    <div>
      <p>Child</p>
      <button onClick={fun}>Run child function</button>
    </div>
  )
}

export default memo(Child)
