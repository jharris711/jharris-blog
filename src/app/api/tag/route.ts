import { NextResponse } from 'next/server';
import supabaseClient from '@/services/supabaseClient';

/**
 * Get all tags
 * GET /api/tag
 */
export const GET = async (_: Request) => {
  const supabase = await supabaseClient();

  if (!supabase) return;

  const { data: tags, error } = await supabase.from('tags').select('*');

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(tags);
};
