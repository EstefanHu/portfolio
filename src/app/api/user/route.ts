import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import {
    BAD_REQUEST,
    CONFLICT,
    NOT_AUTHENTICATED,
    INVALID_REQUEST,
    SUCCESS,
    CREATED,
    UPDATED,
} from '@/lib/httpResponses';
import prisma from '@/lib/prisma';
import redis from '@/lib/redis';
import setUserSession from '@/lib/setUserSession';
import { validateEmailAddress } from '@/lib/validateEmailAddress';
import { validatePhoneNumber } from '@/lib/validatePhoneNumber';

export async function POST(request: Request) {
    const { emailAddress, password } = await request.json();
    if (!emailAddress || !password) return new Response(BAD_REQUEST);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            emailAddress,
            password: hashedPassword,
        },
    });

    const sessionToken = await setUserSession(redis, user.id);

    return new Response(CREATED, {
        headers: {
            'Set-Cookie': `portfolioAuth=${sessionToken}; Max-Age=${process.env.SESSION_TTL
                }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
        },
    });
}

export async function GET() {
    const cookieStore = cookies();
    const value = cookieStore.get('portfolioAuth')?.value;
    if (!value) return new Response(BAD_REQUEST);

    const userId = await redis.hget(`portfolioUser:${value}`, 'userId');
    if (!userId)
        return new Response(NOT_AUTHENTICATED, {
            headers: { 'Set-Cookie': 'portfolioAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Max-Age=0;' },
        });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user)
        return new Response(INVALID_REQUEST, {
            headers: { 'Set-Cookie': 'portfolioAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Max-Age=0;' },
        });
    const { id, name, emailAddress, emailConfirmed, imageUrl } = user;

    const data = {
        ...JSON.parse(SUCCESS),
        data: { id, name, emailAddress, emailConfirmed, imageUrl },
    };

    return new Response(JSON.stringify(data));
}

export async function PATCH(request: Request) {
    const cookieStore = cookies();
    const value = cookieStore.get('portfolioAuth')?.value;
    if (!value) return new Response(BAD_REQUEST);

    const userId = await redis.hget(`portfolioUser:${value}`, 'userId');
    if (!userId)
        return new Response(NOT_AUTHENTICATED, {
            headers: { 'Set-Cookie': 'portfolioAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Max-Age=0;' },
        });

    const fields = await request.json();
    const { emailAddress, phoneNumber } = fields;

    if (emailAddress) {
        if (!validateEmailAddress(emailAddress)) return new Request(BAD_REQUEST);
        const user = await prisma.user.findUnique({ where: { emailAddress } });
        if (user) return new Request(CONFLICT);
    }

    if (phoneNumber && !validatePhoneNumber(phoneNumber)) return new Request(BAD_REQUEST);

    await prisma.user.update({ where: { id: userId }, data: { ...fields } });

    return new Response(UPDATED);
}