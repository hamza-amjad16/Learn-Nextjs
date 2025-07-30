import { cache } from "react"
import { prisma } from ".."
import type { Comment } from "@prisma/client"

export type CommentwithAuthor = Comment & {
    user: {name: string | null , image: string | null}
}

export const fetchCommentById =cache(
 async (postId: string) : Promise<CommentwithAuthor[]> => {
    return prisma.comment.findMany({
        where: {postId},
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
}
)
    