import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
  // Added below according to https://knowledge.udacity.com/questions/999143
  // Fixes SequelizeConnectionError as encryption cannot be disabled on AWS RDS
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // added for compatibility with RDS
    }
  }
});
