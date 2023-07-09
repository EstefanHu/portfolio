import { cookies } from 'next/headers';
import { v4 as generateUUID } from 'uuid';
import { BAD_REQUEST, SUCCESS } from '@/lib/httpResponses';
import redis from '@/lib/redis';

// const setUserSession = async (redis: Redis, userId: string): Promise<string> => {
//   const token: string = generateUUID();
//   const key = `portfolioUser:${token}`;
//   const repeatedToken = await redis.exists(key);
//   if (repeatedToken === 1) return setUserSession(redis, userId);
//   await redis.hset(key, 'userId', userId);
//   await redis.expire(key, Number(process.env.SESSION_TTL));

//   return token;
// };

// export async function POST(request: Request) {
//   const { emailAddress, password } = await request.json();
//   if (!emailAddress || !password) return new Response(BAD_REQUEST);
//   const user = await prisma.user.findUnique({ where: { emailAddress } });
//   if (!user) return new Response(INVALID_REQUEST);
//   if (!(await bcrypt.compare(password, user.password))) return new Response(INVALID_REQUEST);

//   const sessionToken = await setUserSession(redis, user.id);

//   return new Response(SUCCESS, {
//     headers: {
//       'Set-Cookie': `portfolioAuth=${sessionToken}; Max-Age=${
//         process.env.SESSION_TTL
//       }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
//     },
//   });
// }

export async function POST(request: Request) {
  const { password } = await request.json();
  if (password !== 'poiupoiu') return new Response(BAD_REQUEST);

  return new Response(SUCCESS, {
    headers: {
      'Set-Cookie': `portfolioAuth=${generateUUID()}; Max-Age=${process.env.SESSION_TTL
        }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
    },
  });
}

export async function DELETE() {
  const cookieStore = cookies();
  const value = cookieStore.get('portfolioAuth')?.value;
  if (!value) return new Response(BAD_REQUEST);

  await redis.del(`portfolioUser:${value}`);

  return new Response(SUCCESS, {
    headers: { 'Set-Cookie': 'portfolioAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Max-Age=0;' },
  });
}
