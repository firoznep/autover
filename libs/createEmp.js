"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaCli";

export async function createEmp(data) {
  await prisma.driver.create(
    {
      data: {
        name: data.name,
        drCode: data.empcode,
        image: data.image,
        email: data.email,
        country: data.country,
        age: data.age && Number(data.age),
        contact: data.contact && Number(data.contact),
        license: data.license,
        licenseExp: data.licenseexp && new Date(data.licenseexp),
        licensecategory: data.licensecategory,
        status: data.status,
        note: data.note,
        vehicleId: data.vehicleid && Number(data.vehicleid),
      },
    },
    { caches: revalidatePath("/") }
  );
}
