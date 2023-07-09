import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import { v4 as generateUUID } from 'uuid';
import { BAD_REQUEST, INVALID_REQUEST, SUCCESS } from '@/lib/httpResponses';
import prisma from '@/lib/prisma';
import redis from '@/lib/redis';
import { Redis } from 'ioredis';

export async function POST(request: Request) {
  return new Response(SUCCESS);
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
