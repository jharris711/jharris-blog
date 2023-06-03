import { NextResponse } from 'next/server';
import supabaseClient from '@/services/supabaseClient';

/**
 * Get all comments for a blog
 * GET /api/comment
 */
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const blog_id = searchParams.get('blog_id');

  const supabase = await supabaseClient();

  if (!supabase) return;

  const { data: comments, error } = await supabase
    .from('comments')
    .select('*')
    .eq('blog_id', blog_id)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(comments);
};

/**
 * Add a comment to the DB
 * POST /api/comment
 */
export const POST = async (req: Request) => {
  const requestHeaders = new Headers(req.headers);
  const token = requestHeaders.get('Authorization')?.split(' ')[1];

  const supabase = await supabaseClient(token);

  if (!supabase) return;

  const comment = await req.json();

  const { error, data } = await supabase.from('comments').insert(comment);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
};
