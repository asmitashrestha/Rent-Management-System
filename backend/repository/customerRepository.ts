import db from "../models";

export const postCustomer = async (
  fId: number | string,
  customerName: string,
  // floorNumber: number
) => {
  return await db.Customer.create({
    fId: fId,
    customerName: customerName,
    // floorNumber: floorNumber,
  });
};

export const getCustomers = async (fId: string | number) => {
  return await db.Customer.findAll({
    where: {
      fId: fId,
    },
  });
};

export const getLatestCustomer = async (fId: string | number) => {
  return await db.Customer.findOne({
    where: { fId: fId },
    order: [["createdAt", "DESC"]],
  });
};

// export const getCustomer = async (
//   fId: number | string,
//   id: string | number
// ) => {
//   return await db.Customer.findOne({ where: { fId: fId, id: id } });
// };
export const getCustomer = async (
  fId: number | string
) => {
  return await db.Customer.findOne({ where: { fId: fId} });
};

export const getCustomerById = async (id: number | string) => {
  return await db.Customer.findOne({ where: { id: id } });
};

export const putAmounts = async (
  cId: string | number,
  id: string | number,
  billAmount: number,
  paidAmount: number,
  remainingAmount: number
) => {
  return await db.Customer.update(
    {
      billAmount: billAmount,
      paidAmount: paidAmount,
      remainingAmount: remainingAmount,
    },
    { where: { cId: cId, id: id } }
  );
};

export const putBIllAmount = async (
  id: string | number,
  billAmount: number
) => {
  return await db.Customer.update(
    {
      billAmount: billAmount,
    },
    {
      where: {
        id: id,
      },
    }
  );
};

export const updateRemaining = async (
  cId: string | number,
  remainingAmount: number
) => {
  return await db.Customer.update(
    {
      remainingAmount: remainingAmount,
    },
    { where: { cId: cId } }
  );
};

export const updatePaidBalance = async (
  id: string | number,
  paidAmount: number,
  remainingAmount: number
) => {
  return await db.Customer.update(
    {
      paidAmount: paidAmount,
      remainingAmount: remainingAmount,
    },
    { where: { id: id } }
  );
};
