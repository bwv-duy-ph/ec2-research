import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 8080;

export const DB_NAME = process.env.DB_NAME || "db_test";
export const DB_USERNAME = process.env.DB_USERNAME || "duyph";
export const DB_PASSWORD = process.env.DB_PASSWORD || "Tdpamm00";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
