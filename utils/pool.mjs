import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "corp_db",
  password: "rootroot",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as 'connectionLimit'
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value is 60000
  queueLimit: 0,
});
const promisePool = pool.promise();

export { promisePool, pool };
