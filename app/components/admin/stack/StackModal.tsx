import React, { Dispatch, SetStateAction } from 'react'
import AddStackComponent from './AddStackComponent'

function StackModal({setStackModal} : {setStackModal : Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-lg "> 
        <AddStackComponent givenStack = {undefined}/>
        <button type='button' onClick={ () => setStackModal(false)}>Annuler</button>
    </div>
  )
}

export default StackModal