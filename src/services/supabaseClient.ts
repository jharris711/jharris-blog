import { createClient } from '@supabase/supabase-js';

const supabaseClient = async (supabaseAccessToken?: string) => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!url || !key) {
    console.log("Can't connect to SupaBase. Check your URL and Key.");
    return undefined;
  }

  if (supabaseAccessToken) {
    const supabase = createClient(url, key, {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    });
    return supabase;
  }

  const supabase = createClient(url, key);
  return supabase;
};

export default supabaseClient;
