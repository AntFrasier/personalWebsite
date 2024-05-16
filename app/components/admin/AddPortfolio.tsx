
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';



function AddPortfolio() {

  return (
    <div className='relative hover:bg-primary p-2 rounded-xl'>
        <Link href={"addPortfolio"}>
          <b>Add</b> 
          <AddIcon />
        </Link>
    </div>
  )
}

export default AddPortfolio