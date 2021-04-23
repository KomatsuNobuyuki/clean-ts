import mysql from 'mysql';
import dotenv from 'dotenv';
import { IDBConnection } from '../interfaces/database/IDBConnection';
import util from 'util';

interface PromisifiedPool extends Omit<mysql.Pool, 'query'> {
  query: mysql.QueryFunction | Function;
}

export class MySqlConnection {
  private pool: PromisifiedPool

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

    this.pool.query = util.promisify(this.pool.query);

    this.pool.on('connection', (connection: mysql.PoolConnection) => {
      console.log('mysql connection create')
    });

    this.pool.on('release', (connection: mysql.PoolConnection) => {
      console.log('Connection %d released', connection.threadId)
    });
  }

  execute(query: string, params: any = null) {
    if(params !== null) {
      return this.pool.query
    } else {
      return this.pool.query(query);
    }
  }
}