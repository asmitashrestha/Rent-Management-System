import db from "../models";

export const registration = async (userId: number | string, floors: number) => {
  return await db.Building.create({
    userId: userId,
    floors: floors,
  });
};

export const fetchBuilding = async (userId: number | string) => {
  return await db.Building.findAll({ where: { userId: userId } });
};
