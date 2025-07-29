import { Post } from "@prisma/client"
import { prisma } from ".."

export type PostwithData = Post & {
    topic: {slug: string}
    _count: {comments: number}
    user: {name:string | null}
}

export const fetchPostbyTopicslug = async (slug: string) : Promise<PostwithData[]> => {
    return prisma.post.findMany({
        where: {
            topic: {slug}
        },
        include: {
            topic: {select: {slug: true}},
            _count: {select: {comments: true}},
            user: {select: {name: true}}
        }
    })
}

export const fetchTopPosts = async () : Promise<PostwithData[]> => {
    return prisma.post.findMany({
        orderBy: [
            {
                comments: {_count: "desc"}
            }
        ],
         include: {
            topic: {select: {slug: true}},
            _count: {select: {comments: true}},
            user: {select: {name: true}}
        },
        take: 5
    })
}