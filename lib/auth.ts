import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: number;
  email: string;
}

export async function getCurrentUser(): Promise<TokenPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return null;
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured");
    }

    const decoded = jwt.verify(token, secret) as TokenPayload;

    return decoded;
  } catch {
    return null;
  }
}
