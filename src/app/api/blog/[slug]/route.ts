import { NextResponse } from 'next/server';
import supabaseClient from '@/services/supabaseClient';

interface Params {
  params: { slug: string };
}

/**
 * Get a single blog
 * GET /api/blog/[slug]
 */
export const GET = async (_: Request, { params }: Params) => {
  const slug = params.slug;

  const supabase = await supabaseClient();

  if (!supabase) return;

  const { data: incomingBlog } = await supabase
    .from('blogs')
    .select()
    .eq('id', slug);

  if (!incomingBlog || !incomingBlog[0]) {
    return NextResponse.json({ message: 'Blog Not Found' }, { status: 404 });
  }

  return NextResponse.json(incomingBlog[0]);
};
