import React, { useState } from 'react'
import dice1 from '../../assets/images/dice_1.png'
import dice2 from '../../assets/images/dice_2.png'
import dice3 from '../../assets/images/dice_3.png'
import dice4 from '../../assets/images/dice_4.png'
import dice5 from '../../assets/images/dice_5.png'
import dice6 from '../../assets/images/dice_6.png'

const GamePage = () => {
  const [diceValue, setDiceValue] = useState(1)
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]

  const rollDice = () => {
    setDiceValue(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      <img src={diceImages[diceValue - 1]} alt={`Dice showing ${diceValue}`} width={150} />
      <button onClick={rollDice} className='bg-black text-white font-bold px-9 py-2 rounded'>Roll Dice</button>
    </div>
  )
}

export default GamePage