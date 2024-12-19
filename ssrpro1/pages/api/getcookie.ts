import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

type Data = {
  username?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const cookies = cookie.parse(req.headers.cookie || '');

  if (cookies.username) {
    res.status(200).json({ username: cookies.username });
  } else {
    res.status(400).json({ error: 'Username cookie not found' });
  }
}
