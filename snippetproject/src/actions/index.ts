"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const SaveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });

  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });

  redirect("/");
};

export const createSnippet = async (
  prevState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required or must be longer" };
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code is required or must be longer" };
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

//   throw new Error("Oops Something Went Wrong");
  } catch (error: any) {
    return { message: error.message };
  }
  redirect("/");
};
