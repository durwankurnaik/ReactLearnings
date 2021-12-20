import React from 'react'

function MemoComponent() {
  return (
    <div>
      This is a memo component
    </div>
  )
}

export default React.memo(MemoComponent)
