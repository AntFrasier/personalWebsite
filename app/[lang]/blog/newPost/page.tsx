import prisma from "@/prisma/prismaClient"

const newPost = async () => {
    const posts = await prisma.post.findFirst()
    console.log("the post : ", posts)
    return (
        <div>posts {posts?.authorId}</div>
    )
}

export default newPost