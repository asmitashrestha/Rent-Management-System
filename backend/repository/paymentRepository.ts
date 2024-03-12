import db from "../models";

export const postPayment = async (
  c_id: number | string,
  paidAmount: number
) => {
  return await db.Payment.create({
    c_id: c_id,
    paidAmount: paidAmount,
  });
};

export const getPayments = async (c_id: number | string) => {
  return await db.Payment.findAll({ where: { c_id: c_id } });
};

export const getLatestPayment = async (c_id: number | string) => {
  return await db.Payment.findOne({
    where: { c_id: c_id },
    order: [["createdAt", "DESC"]],
  });
};
