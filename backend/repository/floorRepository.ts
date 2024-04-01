import db from "../models";

export const postFloor = async (
  bId: string | number,
  floorNumber: number | string,
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

export const getFloorByNumber = async (floorNumber: number | string) => {
  return await db.Floor.findOne({ where: { floorNumber: floorNumber } });
};

export const changeStatus = async (id: number | string, status: string) => {
  return await db.Floor.update(
    { status: status },
    {
      where: {
        id: id,
      },
    }
  );
};
