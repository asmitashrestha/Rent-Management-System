import db from "../models";

export const registerUser = async (
  userName: string,
  email: string,
  password: string
) => {
  return await db.User.create({
    userName: userName,
    email: email,
    password: password,
  });
};

// finding user in database using email
export const findUser = async (email: string) => {
  return await db.User.findOne({ where: { email: email } });
};
