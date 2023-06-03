import { NextResponse } from 'next/server';
import supabaseClient from '@/services/supabaseClient';

/**
 * Get all blogs
 * GET /api/blog
 */
export const GET = async (_: Request) => {
  const supabase = await supabaseClient();

  if (!supabase) return;

  const { data: incomingBlogs, error } = await supabase
    .from('blogs')
    .select('*');

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(incomingBlogs);
};
