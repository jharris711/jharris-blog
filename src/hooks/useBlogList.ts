import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useBlogList = () => {
  const url = '/api/blog';
  const { data, error, isLoading } = useSWR(url, fetcher);

  return { blogList: data, isLoading, isError: error };
};

export default useBlogList;
