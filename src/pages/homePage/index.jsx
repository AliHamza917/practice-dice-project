import React from 'react'
import dices from '../../assets/images/dices 1.png'

const HomePage = () => {
  return (
    <div className='flex justify-between place-items-center px-28 '>
        <div>
            <img src={dices}/>
        </div>
        <div className='flex flex-col' >
            <div className='text-8xl font-bold pb-6'>Dice Game</div>
            <btn className='self-end bg-black text-white font-bold px-9 py-2 rounded'>Play Game</btn>
            
        </div>
    </div>
  )
}

export default HomePage