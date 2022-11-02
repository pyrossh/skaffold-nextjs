import sql from '../utils/pool';

exports.up = async client => {
  await sql`
  CREATE TABLE todos (
    id TEXT NOT NULL PRIMARY KEY,
    text TEXT NOT NULL,
    completed BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
  );  
  `
};

exports.down = async client => {

};
