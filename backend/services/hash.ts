import bcrypt from "bcrypt";

export const bcryptString = (stringToHash: string) => {
  const saltRounds = 12;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedString = bcrypt.hashSync(stringToHash, salt);
  return hashedString;
};
