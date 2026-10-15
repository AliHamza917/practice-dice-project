import React from 'react'
import dices from '../../../assets/images/dices 1.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-28 py-4'>
      <div className='text-2xl font-bold'>Dice Game</div>
      <img src={dices} alt='Dice logo' width={40} />
    </header>
  )
}

export default Header
