import { prisma } from "./prismaCli";

export default async function getDriver(id) {
  const driver = await prisma.driver.findUnique({
    where: {
      id: Number(id),
    },
  });

  return driver;
}
