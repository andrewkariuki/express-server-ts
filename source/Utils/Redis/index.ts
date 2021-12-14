import * as IoRedis from "ioredis";

export const Redis =
  process.env.NODE_ENV === "production"
    ? new IoRedis(process.env.REDIS_URL)
    : new IoRedis();
