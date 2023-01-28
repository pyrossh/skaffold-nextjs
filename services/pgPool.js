import Pool from 'pg-pool';
import url from 'url';

const params = url.parse('postgres://postgres:postgres@postgres:5432/postgres');
const auth = params.auth.split(':');

const pool = new Pool({
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: false
});

export default pool;
