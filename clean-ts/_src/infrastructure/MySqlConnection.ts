import mysql from 'mysql';
import dotenv from 'dotenv';
import { IDBConnection } from '../interfaces/database/IDBConnection';

class MySqlConnection {
  private pool: mysql.Pool

  constructor() {
    dotenv.config();
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      timezone: 'utc'
    });

    this.pool.getConnection((error: mysql.MysqlError | undefined, connection: mysql.PoolConnection | undefined) => {
      if(error) {
        if(error.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.');
        } else if(error.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.');
        } else if(error.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.');
        }
      }

      if (connection) connection.release();
    });
  }
}