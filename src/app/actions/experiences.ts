"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createExperience,
  updateExperience,
  deleteExperience,
} from "@/db/queries";

export async function createExperienceAction(formData: FormData) {
  const techRaw = formData.get("techStack") as string;
  const techStack = techRaw
    ? techRaw.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  await createExperience({
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    startDate: formData.get("startDate") as string,
    endDate: (formData.get("endDate") as string) || null,
    description: formData.get("description") as string,
    techStack,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  });

  revalidatePath("/");
  redirect("/admin/experiences");
}

export async function updateExperienceAction(id: string, formData: FormData) {
  const techRaw = formData.get("techStack") as string;
  const techStack = techRaw
    ? techRaw.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  await updateExperience(id, {
    company: formData.get("company") as string,
    role: formData.get("role") as string,
    startDate: formData.get("startDate") as string,
    endDate: (formData.get("endDate") as string) || null,
    description: formData.get("description") as string,
    techStack,
    sortOrder: Number(formData.get("sortOrder") ?? 0),
  });

  revalidatePath("/");
  redirect("/admin/experiences");
}

export async function deleteExperienceAction(id: string) {
  await deleteExperience(id);
  revalidatePath("/");
}
