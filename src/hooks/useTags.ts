import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useTags = () => {
  const url = '/api/tag';
  const { data: tags, error, isLoading } = useSWR(url, fetcher);

  return { tags, isLoading, isError: error };
};

export default useTags;
