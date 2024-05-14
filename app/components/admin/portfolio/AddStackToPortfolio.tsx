import React, { useEffect, useState } from 'react'
import ImageCard from '../../blogComponent/ImageCard'
import { ReturnedStack } from '@/lib/getAllStacks'
import AddButton from '../AddButton'
import LoadingSpinner from '../../LoadingSpinner'
import StackModal from '../stack/StackModal'
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { Portfolio, Stack } from '@prisma/client'
import { ToSavedPortfolio } from '@/lib/getPortfolios'

function AddStackToPortfolio({
    allStacks,
    loading,
    setValue,
    getValues,
    givenStacks,
    } : {
    allStacks : ReturnedStack[] | undefined,
    loading : boolean,
    setValue: UseFormSetValue<ToSavedPortfolio>,
    getValues: UseFormGetValues<ToSavedPortfolio>,
    givenStacks? : Stack[]
    }) {

    const [stackModal, setStackModal] = useState(false)
    const [currentStacks, setCurrentStacks] = useState<Stack[]>([])
    useEffect(() => {
        setValue("stacks", currentStacks)
    },[currentStacks])

    useEffect(() => {
        
        if (givenStacks) {
            setCurrentStacks(givenStacks)
        }
    },[givenStacks])

    const checkStackPresence = (stack : Stack) => {
        let findTrack = false;
        for (let i=0; i< currentStacks.length; i++) {
            if (currentStacks[i].id == stack.id) {
                findTrack = true;
                break;
            }}
        return findTrack
    }

  return (
    <div className="flex flex-row flex-wrap realtive gap-6 items-center bg-gray-50 p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        {allStacks?.map( (stack) =>
            <button key={stack.id} type='button' onClick={() => {
                
                if (checkStackPresence(stack)){ //includes doest work here ...
                    setCurrentStacks(currentStacks.filter( (thisStack) => thisStack.id !== stack.id))
                } else {
                    setCurrentStacks([...currentStacks, stack])
                }
            }}>
                <ImageCard imageUrl={stack.stackImage.url} imageAlt={stack.stackImage.alt_fr} imageName={stack.stackImage.name_fr} />
            </button>
        )}
        {loading && <LoadingSpinner />}
        <AddButton setModal = {setStackModal} />
        {stackModal && <StackModal setStackModal={setStackModal} />}
    </div>
  )
}

export default AddStackToPortfolio