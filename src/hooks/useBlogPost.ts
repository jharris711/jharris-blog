import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useBlogPost = (id: number) => {
  const url = `/api/blog/${id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { blog: data, isLoading, isError: error };
};

export default useBlogPost;
