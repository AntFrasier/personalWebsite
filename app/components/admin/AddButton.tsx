'use client'
import AddIcon from '@mui/icons-material/Add';
import { Dispatch, SetStateAction } from 'react';

export default function AddButton({setModal} : {setModal:Dispatch<SetStateAction<boolean>>}) {
  return (
    <div className="flex flex-col justify-center items-center p-2 w-[150px] h-[150px] bg-white border border-gray-200 rounded-lg shadow focus:bg-blue">
        <div className="border p-2 rounded-full bg-gray-200">
            <button type='button' onClick={() => setModal(true)}>
                <AddIcon />
            </button>
        </div>
    </div>
  )
}

