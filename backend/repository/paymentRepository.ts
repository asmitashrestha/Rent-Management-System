import db from "../models";

export const postPayment = async (
  c_id: number | string,
  paidAmount: number
) => {
  return await db.billPayment.create({
    c_id: c_id,
    paidAmount: paidAmount,
  });
};

export const getPayments = async (c_id: number | string) => {
  return await db.billPayment.findAll({ where: { c_id: c_id } });
};

export const getLatestPayment = async (c_id: number | string) => {
  return await db.billPayment.findOne({
    where: { c_id: c_id },
    order: [["createdAt", "DESC"]],
  });
};
