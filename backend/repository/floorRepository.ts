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

export const getFloorById = async (id: number | string) => {
  return await db.Floor.findOne({
    where: { id: id },
  });
};

export const putFloor = async (
  bId: string | number,
  id: string | number,
  price: number
) => {
  return await db.Floor.update(
    { price: price },
    {
      where: {
        bId: bId,
        id: id,
      },
    }
  );
};

export const putEmpty = async (id: string | number) => {
  return await db.Floor.update({ status: "empty" }, { where: { id: id } });
};
