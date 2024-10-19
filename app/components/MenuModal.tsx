'use client'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { Dictionary } from '@/lib/dictionary';
import { Session } from 'next-auth';


const Modal = ({
    toggelShowModal,
    dictionary,
    session } : {
    toggelShowModal : React.Dispatch<React.SetStateAction<boolean>>, 
    dictionary : Dictionary,
    session? : Session | null
    }) => {
    return (
        <div id='menu-modal' >
            <ul className='flex flex-col gap-5'>
            <button type='button' className='bg-secondary' onClick={() => toggelShowModal(false)}>
                <Menu dictionary = {dictionary} session={session}/>
           </button>
        </ul>
        </div>
    )
}



const MenuModal = ({dictionary, session} : {dictionary : Dictionary ,  session? : Session | null}) => {
    const [showModal, toggelShowModal] = useState<boolean>(false);
    
    useEffect ( () => {
        return (
            () => toggelShowModal(false)
        )
    },[])

  return (
    <>
        <button type="button" onClick={() => toggelShowModal( (prev) => !prev)}className="">
            <span className="burger bg-primary-content bg-primary-content"></span>
        </button>
          {showModal ?  <Modal toggelShowModal={toggelShowModal} dictionary={dictionary} session={session}/> : null}
    </>
  )
}

export default MenuModal