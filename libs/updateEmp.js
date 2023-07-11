"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaCli";

export async function updateEmp(emp, id) {
  await prisma.driver.update(
    {
      where: {
        id: id,
      },
      data: {
        name: emp.name,
        drCode: emp.empcode,
        image: emp.image,
        email: emp.email,
        country: emp.country,
        age: emp.age && Number(emp.age),
        contact: emp.contact && Number(emp.contact),
        license: emp.license,
        licenseExp: emp.licenseexp && new Date(emp.licenseexp),
        licensecategory: emp.licensecategory,
        status: emp.status,
        note: emp.note,
        vehicleId: emp.vehicleid && Number(emp.vehicleid),
      },
    },
    { caches: revalidatePath("/") }
  );
}
