import getAllStacks from '@/lib/getAllStacks'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import ModeIcon from '@mui/icons-material/Mode';import Link from 'next/link';


async function Stacks() {
    const stacks = await getAllStacks()
  return (
    <div className="flex flex-col items-start px-9 min-h-screen">
        <h1>Stack managment</h1>
        <ul className='flex flex-col gap-3'>
            {stacks?.map ( (stack) => {
                return (
                    <li key={stack.id} className='flex flex-row bg-base-200 w-48 justify-between items-center p-3 rounded-xl'>
                        <h2 className='mt-0'>
                            {stack.name}
                        </h2>
                        <Image 
                        className='rounded-xl'
                            src={stack.stackImage.url}
                            alt={stack.stackImage.alt_fr}
                            width={50}
                            height={50}
                            />
                        <Link href={{
                            pathname:'/admin/addStack',
                            query: {
                                id : stack.id,
                                imageId: stack.stackImage.id,
                                name: stack.name,
                                stackUrl: stack.stackImage.url,
                            },
                        }}> <ModeIcon /> </Link>
                    </li>
                )
            })}
            <li className='flex flex-row bg-base-200 w-48 justify-between items-center p-3 rounded-xl'>
                        <h2 className='mt-0'>
                            Add
                        </h2>
                        <Link href={"/admin/addStack"} className='w-[50px] flex items-center justify-center'>
                            <AddIcon />
                        </Link>
                          
                    </li>
        </ul>
    </div>
  )
}

export default Stacks