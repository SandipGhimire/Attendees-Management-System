import { defineConfig } from "prisma/config";
import "dotenv/config";
import path from "node:path";

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env;

const url =
  DATABASE_USER && DATABASE_PASSWORD && DATABASE_HOST && DATABASE_PORT && DATABASE_NAME
    ? `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
    : undefined;

export default defineConfig({
  schema: path.join("database", "schema"),
  migrations: {
    path: "database/migrations",
    seed: "tsx ./database/seeder.ts",
  },
  datasource: {
    url,
  },
});
