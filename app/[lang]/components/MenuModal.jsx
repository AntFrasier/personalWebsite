'use client'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';

const Modal = ({toggelShowModal}) => {
    return (
        <div id='menu-modal' >
            <ul className='flex flex-col gap-5'>
            <button type='button' className='bg-secondary' onClick={() => toggelShowModal(false)}>
                <Menu />
           </button>
        </ul>
        </div>
    )
}



const MenuModal = () => {
    const [showModal, toggelShowModal] = useState(false);
   
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
          {showModal ?  <Modal toggelShowModal={toggelShowModal}/> : null}
    </>
  )
}

export default MenuModal