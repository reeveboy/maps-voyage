import type { Prisma } from "@prisma/client";

export type TourWithDestination = Prisma.TourGetPayload<{
  include: { destination: true };
}>;

export type TourWithDestinationAndDays = Prisma.TourGetPayload<{
  include: { destination: true; tourDays: true };
}>;
