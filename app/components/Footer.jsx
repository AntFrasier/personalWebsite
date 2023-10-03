import React from 'react'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className='flex justify-center fixed bottom-0 w-full bg-secondary shadow-lg'>
        <p>&copy;Copyright Cyril Maranber - {year}</p>
    </footer>
  )
}

export default Footer