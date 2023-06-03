import { ActiveSessionResource } from '@clerk/types';
import { Comment } from '@/types/Comment';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useComments = (
  blog_id: number,
  session?: ActiveSessionResource | null | undefined
) => {
  const url = `/api/comment?blog_id=${blog_id}`;
  const {
    data: commentList,
    error,
    isLoading,
  } = useSWR(url, fetcher, {
    refreshInterval: 1500,
  });

  /**
   * Add a comment to the DB
   */
  const addComment = async (comment: Comment) => {
    try {
      if (!session) return;

      const supabaseAccessToken = await session.getToken({
        template: 'supabase',
      });

      if (!supabaseAccessToken) return;

      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(comment),
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
    commentList,
    totalComments: (commentList && commentList.length) ?? 0,
    isLoading,
    isError: error,
    addComment,
  };
};

export default useComments;
