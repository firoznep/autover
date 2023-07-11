import { prisma } from "./prismaCli";

export const vehicles = async () => {
  const vehicles = await prisma.vehicle.findMany();
  return vehicles;
};

// for drivers.................
export const drivers = async () => {
  const drivers = await prisma.driver.findMany();
  return drivers;
};
