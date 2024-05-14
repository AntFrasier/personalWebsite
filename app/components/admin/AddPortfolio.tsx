
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';



function AddPortfolio() {

  return (
    <div className='relative'>
        <Link href={"addPortfolio"}>
                <AddIcon />
        </Link>
    </div>
  )
}

export default AddPortfolio