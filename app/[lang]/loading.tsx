import React from 'react'

const Loading = () => {
  return (
    <div className='min-w-100vw min-h-100vh flex justify-center align-center item-center'>
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
        
        <div className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
        </div>
</div>
</div>
  )
}

export default Loading