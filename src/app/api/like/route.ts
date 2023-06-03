import { NextResponse } from 'next/server';
import supabaseClient from '@/services/supabaseClient';

/**
 * Get all likes for a blog
 * GET /api/like
 */
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const blog_id = searchParams.get('blog_id');

  const supabase = await supabaseClient();

  if (!supabase) return;

  const { data: likes, error } = await supabase
    .from('likes')
    .select('*')
    .eq('blog_id', blog_id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(likes);
};

/**
 * Add a like to the DB
 * POST /api/like
 */
export const POST = async (req: Request) => {
  const requestHeaders = new Headers(req.headers);
  const token = requestHeaders.get('Authorization')?.split(' ')[1];

  const supabase = await supabaseClient(token);

  if (!supabase) return;

  const like = await req.json();

  const { error, data } = await supabase.from('likes').insert(like);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 201 });
};

/**
 * Delete a like from the DB
 * DELETE /api/like
 */
export const DELETE = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const like_id = searchParams.get('like_id');
  const requestHeaders = new Headers(req.headers);
  const token = requestHeaders.get('Authorization')?.split(' ')[1];

  const supabase = await supabaseClient(token);

  if (!supabase) return;

  const { error } = await supabase.from('likes').delete().eq('id', like_id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json({ message: 'Like Deleted' }, { status: 202 });
};
