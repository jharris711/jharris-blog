'use client';
import dayjs from 'dayjs';
import LoadingDots from '../LoadingDots';
import useBlogList from '@/hooks/useBlogList';
import useTags from '@/hooks/useTags';
import { Blog } from '@/types/Blog';
import { Tag } from '@/types/Tag';

const BlogList = () => {
  const { blogList, isLoading } = useBlogList();
  const { tags } = useTags();

  const loaded = !isLoading && blogList && tags;
  if (loaded) {
    return (
      <>
        <section className='dark:text-gray-400 dark:bg-gray-900 rounded body-font overflow-hidden'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center dark:text-white p-8 border-b border-indigo-500'>
            Blog Posts
          </h1>
          <div className='container px-5 py-12 mx-auto'>
            {blogList.map((blog: Blog, i: number) => {
              const { id, created_at, title, description, tags: tagIds } = blog;
              const date = dayjs(created_at).format(`MMMM DD, YYYY`);
              const featuredTag = tags.find((tag: Tag) => tag.id === tagIds[0]);

              return (
                <>
                  <div className='-my-8 divide-y-2 divide-gray-800'>
                    {' '}
                    <div className='py-8 flex flex-wrap md:flex-nowrap'>
                      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                        <span className='font-semibold title-font dark:text-white text-indigo-800'>
                          #{featuredTag?.name}
                        </span>
                        <span className='mt-1 dark:text-gray-500 text-sm'>
                          {date}
                        </span>
                      </div>
                      <div className='md:flex-grow'>
                        <h2 className='text-2xl font-medium dark:text-white title-font mb-2'>
                          {title}
                        </h2>
                        <p className='leading-relaxed'>{description}</p>
                        <a
                          href={`/blog/${id}`}
                          className='dark:text-indigo-400 text-indigo-800 inline-flex items-center mt-4'
                        >
                          Read More
                          <svg
                            className='w-4 h-4 ml-2'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M5 12h14'></path>
                            <path d='M12 5l7 7-7 7'></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className='my-16'>
        <article className='max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50'>
          <div className='w-full mx-auto space-y-4 text-center'>
            <LoadingDots />
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogList;
