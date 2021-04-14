import mysql, { createPool } from 'mysql';
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
  }
}