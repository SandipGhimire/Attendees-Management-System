"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("./generated/client");
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const seederFiles = ["Permissions", "Tasks", "User"];
const adapter = new adapter_pg_1.PrismaPg({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});
const SEEDERS_DIR = path_1.default.join(__dirname, "seeders");
const prisma = new client_1.PrismaClient({ adapter });
const getArg = (key) => {
    const arg = process.argv.find((a) => a.startsWith(`--${key}=`));
    return arg ? arg.split("=")[1] : null;
};
async function main() {
    const useFile = getArg("use-file");
    const specific = getArg("file");
    if (useFile == "true" && !specific) {
        console.error("Usage: npm run db:seed:file -- --file=<file_name>");
        process.exit(1);
    }
    try {
        if (useFile == "true") {
            const filePath = path_1.default.join(SEEDERS_DIR, `${specific}.seeder.ts`);
            const module = (await import(filePath));
            if (module) {
                if (typeof module.run == "function") {
                    console.log("----------------------------------------");
                    console.log(`Seeding File: ${specific}.seeder.ts`);
                    const start = process.hrtime.bigint();
                    await module.run(prisma);
                    const end = process.hrtime.bigint();
                    const durationMs = Number(end - start) / 1_000_000;
                    console.log(`Execution Time: ${durationMs.toFixed(2)} ms`);
                    console.log("----------------------------------------");
                }
                else {
                    console.log(`Seeder ${specific}.seeder doesn't export run() function!`);
                }
            }
            else {
                console.log(`Seeder ${specific}.seeder doesn't exist!`);
            }
        }
        else {
            for (const seeder of seederFiles) {
                const filePath = path_1.default.join(SEEDERS_DIR, `${seeder}.seeder.ts`);
                if (!fs.existsSync(filePath)) {
                    console.warn(`Seeder file not found: ${seeder}.seeder.ts`);
                    continue;
                }
                const module = (await import(filePath));
                if (typeof module.run === "function") {
                    console.log("----------------------------------------");
                    console.log(`Seeding File: ${seeder}.seeder.ts`);
                    const start = process.hrtime.bigint();
                    await module.run(prisma);
                    const end = process.hrtime.bigint();
                    const durationMs = Number(end - start) / 1_000_000;
                    console.log(`Execution Time: ${durationMs.toFixed(2)} ms`);
                    console.log("----------------------------------------");
                }
                else {
                    console.warn(`Seeder ${seeder}.seeder.ts does not export run()`);
                }
            }
        }
    }
    finally {
        await prisma.$disconnect();
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => {
    process.exit(0);
});
//# sourceMappingURL=seeder.js.map