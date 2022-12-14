import {PostgreSQL} from "fxsql";
import dotenv from 'dotenv';

const {CONNECT} = PostgreSQL;

dotenv.config();

const POOL = CONNECT({
    host: 'localhost',
    user: process.env.user,
    password: process.env.pw,
    database: process.env.db
});

const {QUERY, QUERY1, EQ, VALUES, SET} = POOL;
export {QUERY, QUERY1, EQ, VALUES, SET};