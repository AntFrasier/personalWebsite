'use client'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { Dictionary } from '@/lib/dictionary';

const Modal = ({
    toggelShowModal,
    dictionary } : {
    toggelShowModal : React.Dispatch<React.SetStateAction<boolean>>, 
    dictionary : Dictionary
    }) => {
    return (
        <div id='menu-modal' >
            <ul className='flex flex-col gap-5'>
            <button type='button' className='bg-secondary' onClick={() => toggelShowModal(false)}>
                <Menu dictionary = {dictionary}/>
           </button>
        </ul>
        </div>
    )
}



const MenuModal = ({dictionary} : {dictionary : Dictionary}) => {
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
          {showModal ?  <Modal toggelShowModal={toggelShowModal} dictionary={dictionary}/> : null}
    </>
  )
}

export default MenuModal