import db from "../models";

export const postFloor = async (
  bId: string | number,
  floorNumber: number,
  price: number
) => {
  return await db.Floor.create({
    bId: bId,
    floorNumber: floorNumber,
    price: price,
  });
};

export const getFloors = async (bId: number | string) => {
  return await db.Floor.findAll({
    where: { bId: bId },
  });
};
