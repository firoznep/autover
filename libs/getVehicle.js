import { prisma } from "./prismaCli";

export default async function getVehicle(id) {
  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: Number(id),
    },
  });

  return vehicle;
}
