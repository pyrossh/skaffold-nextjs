// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sql from '../../utils/pool';

type Data = {
  name: string
}


/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const rand = (Math.random() * 10000).toFixed(0)
  console.log('hello', rand);
  await sql`insert into todos(id, text, completed, created_at, updated_at) values (${rand}, ${rand}, 't', now(), now())`;
  res.status(200).json({ name: 'John Doe' })
}
