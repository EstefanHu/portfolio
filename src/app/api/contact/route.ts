import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import { v4 as generateUUID } from 'uuid';
import { BAD_REQUEST, INVALID_REQUEST, SUCCESS, SERVER_ERROR } from '@/lib/httpResponses';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import redis from '@/lib/redis';
import { Redis } from 'ioredis';

export async function POST(request: Request) {
  const { name, email, reason, message } = await request.json();
  if (!name || !email || !reason || !message) return new Response(BAD_REQUEST);

  try {
    await prisma.contact.create({ data: { name, email, reason, message } });

    return new Response(SUCCESS);
  } catch (e) {
    return new Response(SERVER_ERROR);
  }
}

export async function GET(request: Request) {
  return new Response(SUCCESS);
}

export async function PATCH(request: Request) {
  return new Response(SUCCESS);
}

export async function DELETE(request: Request) {
  return new Response(SUCCESS);
}
