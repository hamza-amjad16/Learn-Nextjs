"use server";
import { prisma } from "@/lib";
import { auth } from "@/lib/auth";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Only lowercase letters and hyphens allowed" }),
  description: z.string().min(10),
});

type createTopicFormState = {
  errors: {
    name?: string[];
    description?: string[];
    formError?: string[];
  };
};

export const createTopics = async (
  prevState: createTopicFormState,
  formData: FormData
): Promise<createTopicFormState> => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return  {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth()
  if(!session || !session.user) {
    return {
      errors: {
        formError: ["You have to login First"]
      }
    }
  }

let topic : Topic
  try {
   topic =  await prisma.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description
      }
    })
  } catch (error) {
    if(error instanceof Error){
      return  {
        errors: {
          formError: [error.message]
        }
      }
    } else {
      return {
        errors: {
          formError: ["Something Went wrong"]
        }
      }
    }
  }
  revalidatePath("/")
  redirect(`/topics/${topic.slug}`)

};
