import postgres from 'postgres';
import prexit from 'prexit'

const sql = postgres(`postgres://postgres:postgres@postgres:5432/postgres`);

prexit(async () => {
  await sql.end({ timeout: 30 })
})

export default sql
