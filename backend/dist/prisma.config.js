"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("prisma/config");
require("dotenv/config");
const node_path_1 = __importDefault(require("node:path"));
const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env;
const url = DATABASE_USER && DATABASE_PASSWORD && DATABASE_HOST && DATABASE_PORT && DATABASE_NAME
    ? `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
    : undefined;
exports.default = (0, config_1.defineConfig)({
    schema: node_path_1.default.join("database", "schema"),
    migrations: {
        path: "database/migrations",
        seed: "tsx ./database/seeder.ts",
    },
    datasource: {
        url,
    },
});
//# sourceMappingURL=prisma.config.js.map