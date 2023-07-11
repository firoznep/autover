"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaCli";

export async function delEmp(id) {
  await prisma.driver.delete(
    {
      where: {
        id: id,
      },
    },
    { caches: revalidatePath("/") }
  );
}
