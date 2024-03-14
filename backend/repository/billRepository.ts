import db from "../models";

export const postBIll = async (
  cId: number | string,
  customerName: string,
  floorRent: number,
  electricityCharges: number,
  waterCharges: number,
  internetCharges: number,
  others: number,
  previousAmount: number,
  total: number
) => {
  return await db.Bill.create({
    cId: cId,
    customerName: customerName,
    floorRent: floorRent,
    electricityCharges: electricityCharges,
    waterCharges: waterCharges,
    internetCharges: internetCharges,
    others: others,
    previousAmount: previousAmount,
    total: total,
  });
};

export const getBIlls = async (cId: number | string) => {
  return await db.BIll.findAll({ where: { cId: cId } });
};

export const getABIll = async (id: string | number) => {
  return await db.Bill.findOne({ where: { id: id } });
};

export const getLatestBill = async (cId: number | string) => {
  return await db.Bill.findOne({
    where: { cId: cId },
    order: [["createdAt", "DESC"]],
  });
};

export const putBIll = async (
  cId: string | number,
  id: string | number,
  customerName: string,
  floorRent: number,
  electricityCharges: number,
  waterCharges: number,
  internetCharges: number,
  others: number,
  previousAmount: number,
  total: number
) => {
  return await db.BIll.update(
    {
      customerName: customerName,
      floorRent: floorRent,
      electricityCharges: electricityCharges,
      waterCharges: waterCharges,
      internetCharges: internetCharges,
      others: others,
      previousAmount: previousAmount,
      total: total,
    },
    {
      where: {
        cId: cId,
        id: id,
      },
    }
  );
};
