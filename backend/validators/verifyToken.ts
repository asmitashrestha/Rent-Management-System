import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookie from "cookie";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const extractTokenFromCookie = (
    cookieString: string,
    cookieName: string
  ): string | null => {
    const cookies = cookie.parse(cookieString);
    return cookies[cookieName] || null;
  };

  const cookieString = req.headers.cookie;
  const token = extractTokenFromCookie(cookieString, "auth_token");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

export default verifyToken;
