import { v4 as generateUUID } from 'uuid';
import { Redis } from 'ioredis';

const setUserSession = async (redis: Redis, userId: string): Promise<string> => {
  const token: string = generateUUID();
  const key = `portfolioUser:${token}`;
  const repeatedToken = await redis.exists(key);
  if (repeatedToken === 1) return setUserSession(redis, userId);
  await redis.hset(key, 'userId', userId);
  await redis.expire(key, Number(process.env.SESSION_TTL));

  return token;
};

export default setUserSession;