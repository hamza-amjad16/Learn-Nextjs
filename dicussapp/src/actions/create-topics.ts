"use server";
import {z} from "zod"

const createTopicSchema =z.object({
    name:z.string().min(3).regex(/^[a-z-]+$-/,{message:"Must be lower case without space"}),
    description:z.string().min(10)
})

export const createTopics = async (prevState:{message: string}, formData: FormData) => {
 

  const result = createTopicSchema.safeParse({
     name : formData.get("name"),
     description : formData.get("description")
  })

  if(!result.success){

  }

return {message: "sdfsdfffs"}
  
};
