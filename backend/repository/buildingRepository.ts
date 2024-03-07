import db from "../models";

export const registration = async (userId: number | string, floors: number) => {
  console.log("userId:", userId, "floors:", floors);
  return;
  return await db.Building.create({
    userId: userId,
    floors: floors,
  });
};
