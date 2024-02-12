import { type Config } from "drizzle-kit";

import { env } from "~/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["myopenait3_*"],
} satisfies Config;
