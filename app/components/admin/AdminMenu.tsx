import Link from "next/link";


const AdminMenu = () => {
  
  return (
    <>
      <li className='hover-underline'>
        <Link href={`/admin/dashboard`}
         className="btn-primary">dashboard</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin/adminBlogPost`}  className="btn-primary">Blog</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin/adminPortfolio`}  className="btn-primary">Portfolio</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/admin`}  className="btn-primary">Acount</Link>
      </li>
      <li className='hover-underline'>
        <Link href={`/`}  className="btn-primary">Fermer</Link>
      </li>
    </>
  )
}

export default AdminMenu