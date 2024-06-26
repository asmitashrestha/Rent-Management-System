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

export const putBuilding = async (
  userId: number | string,
  id: number | string,
  floors: number
) => {
  return await db.Building.update(
    { floors: floors },
    {
      where: {
        userId: userId,
        id: id,
      },
    }
  );
};

export const deleteBuilding = async (
  userId: string | number,
  id: string | number
) => {
  return await db.Building.destroy({
    where: {
      userId: userId,
      id: id,
    },
  });
};
