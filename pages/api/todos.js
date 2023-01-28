import pool from '../../services/pgPool';
import * as todos from '../../db/todos.queries';

export default async function handler(req, res) {
  const result = await todos.getAllTodos.run(null, pool);
  res.status(200).json(result)
}