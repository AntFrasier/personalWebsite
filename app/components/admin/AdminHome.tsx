import LoginButton from "@/app/components/admin/LoginButton"
import { useSession, signIn, signOut } from "next-auth/react"
import LogoutButton from "./LogoutButton"
import Image from "next/image"

const AdminHome = () => {
    const { data: session } = useSession()
    if (session) {
    return (
        <div>
            
            <Image 
                src={session.user.image ? session.user.image : "/img/defaultAvatar.svg"}
                alt="session.user?.name"
                unoptimized
                width={150}
                height={150}
                className="rounded-full"
                />
            <div className="flex flex-col">
                <p>
                    {session.user?.name}
                </p>
                <p>
                    {session.user?.id}
                </p>
                <p>
                    {session.user?.email}
                </p>
                <p>
                    {session.user?.role}
                </p>
            </div>
            <LogoutButton />
        </div>
        )
    } else {
        return (
            <div> 
                <h2>
                    Please log in    
                </h2>
                <LoginButton />
            </div>
        )
    }

}

export default AdminHome;