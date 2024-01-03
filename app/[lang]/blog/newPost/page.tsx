import prisma from "../../../../lib/prisma"

const newPost = async () => {
    const posts = await prisma.post.findFirst()
    
    console.log("the post : ", posts)
    return (
        <div>{posts?.name}</div>
    )
}

export default newPost