import React from 'react'
export default function Die({value, isHeld, holdDice}) {

  const dieClassName = isHeld ? 'die die-held' : 'die'

  return(
      <div className={dieClassName}
        onClick={holdDice}
        data-testid="die"
      >
        {value}
      </div>
  )
}