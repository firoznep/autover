"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prismaCli";

export async function updateVehicle(veh, id) {
  await prisma.vehicle.update(
    {
      where: {
        id: id,
      },
      data: {
        make: veh.make,
        model: veh.model,
        color: veh.color,
        image: veh.image,
        fuel: veh.fuel,
        type: veh.type,
        year: veh.year && new Date(veh.year),
        plateNum: veh.platenum,
        tyreSize: veh.tyresize,
        chasisNum: veh.chassisnum,
        enginenNum: veh.enginenum,
        status: veh.status,
        registrationNum: veh.registrationnum,
        registrationExp: veh.registrationexp && new Date(veh.registrationexp),
        insuranceExpiry: veh.insuranceexpiry && new Date(veh.insuranceexpiry),
        insuredValue: veh.insuredvalue,
        insuranceCompany: veh.insurancecompany,
        insuranceTerms: veh.insuranceterms,
        owner: veh.owner,
        location: veh.location,
        note: veh.note,
      },
    },
    { caches: revalidatePath("/") }
  );
}
