import Link from "next/link";


const AdminMenu = () => {
  
  return (
    <>
      <li className='hover-underline'>
        <Link href={`/admin/dashboard`}
         className="btn-primary">dashboard</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin/AdminBlogPost`}  className="btn-primary">Blog</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin/addPortfolio`}  className="btn-primary">Add portfolio</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin`}  className="btn-primary">Acount</Link>
      </li>
    </>
  )
}

export default AdminMenu