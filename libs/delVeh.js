"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaCli";

export async function delVeh(id) {
  await prisma.vehicle.delete(
    {
      where: {
        id: id,
      },
    },
    { caches: revalidatePath("/") }
  );
}
