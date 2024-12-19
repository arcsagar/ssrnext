// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis, { cacheKey } from "@/lib/redis";
import {serialize} from 'cookie'
// types/api.ts
export type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  // other fields...
};

export type ErrorResponse = {
  error: string;
};

export type Data = UserData | ErrorResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    await redis.set(data.id, JSON.stringify(data), "EX", 3600); // Cache for 1 hour
    res.setHeader(
      "Set-Cookie",
      serialize("user", data.id, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24, 
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
