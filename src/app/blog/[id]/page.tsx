import BlogPost from '@/components/BlogPost';

interface Props {
  params: { id: number };
}

const BlogPostPage = ({ params }: Props) => {
  return (
    <>
      <BlogPost id={params.id} />
    </>
  );
};

export default BlogPostPage;
