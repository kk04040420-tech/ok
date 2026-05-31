"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createEducation, updateEducation, deleteEducation } from "@/db/queries";

export async function createEducationAction(formData: FormData) {
  await createEducation({
    school: formData.get("school") as string,
    major: formData.get("major") as string,
    degree: formData.get("degree") as string,
    startDate: formData.get("startDate") as string,
    endDate: (formData.get("endDate") as string) || null,
    description: (formData.get("description") as string) || null,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  });

  revalidatePath("/");
  redirect("/admin/educations");
}

export async function updateEducationAction(id: string, formData: FormData) {
  await updateEducation(id, {
    school: formData.get("school") as string,
    major: formData.get("major") as string,
    degree: formData.get("degree") as string,
    startDate: formData.get("startDate") as string,
    endDate: (formData.get("endDate") as string) || null,
    description: (formData.get("description") as string) || null,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  });

  revalidatePath("/");
  redirect("/admin/educations");
}

export async function deleteEducationAction(id: string) {
  await deleteEducation(id);
  revalidatePath("/");
}
