import { useEffect, useState } from 'react';
import { ActiveSessionResource } from '@clerk/types';
import { SupabaseClient } from '@supabase/supabase-js';
import supabaseClient from '@/services/supabaseClient';
import { Like } from '@/types/Like';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useLikes = (
  blog_id: number,
  user_id?: string | null,
  session?: ActiveSessionResource | null
) => {
  const url = `/api/like?blog_id=${blog_id}`;
  const {
    data: likes,
    error,
    isLoading,
  } = useSWR(url, fetcher, {
    refreshInterval: 1500,
  });
  const [usersLike, setUsersLike] = useState<Like | null>(null);

  /**
   * Find the user's like
   */
  useEffect(() => {
    if (!likes || !user_id) return;

    const usersLike = likes.find((like: Like) => like.user_id === user_id);

    setUsersLike(usersLike ?? null);
  }, [likes, user_id]);

  /**
   * Add a like to the DB
   */
  const likePost = async (like: Like) => {
    try {
      if (!session) return;

      const supabaseAccessToken = await session.getToken({
        template: 'supabase',
      });

      if (!supabaseAccessToken) return;

      await fetch('/api/like', {
        method: 'POST',
        body: JSON.stringify(like),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + supabaseAccessToken,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Remove a like from the DB
   */
  const unlikePost = async (id: number) => {
    try {
      if (!session) return;

      const supabaseAccessToken = await session.getToken({
        template: 'supabase',
      });

      if (!supabaseAccessToken) return;

      await fetch(`/api/like?like_id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + supabaseAccessToken,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    likes,
    isLoading,
    isError: error,
    usersLike,
    likePost,
    unlikePost,
  };
};

export default useLikes;
