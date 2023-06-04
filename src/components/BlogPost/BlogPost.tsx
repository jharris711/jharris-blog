'use client';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import LikeButton from '../LikeButton';
import Comments from '../Comments';
import useComments from '@/hooks/useComments';
import useBlogPost from '@/hooks/useBlogPost';
import useTags from '@/hooks/useTags';
import useFormatBlog from '@/hooks/useFormatMarkdown';
import CommentBubbleIcon from '@/svgIcons/CommentBubbleIcon';
import { Tag } from '@/types/Tag';
import Toast from '../Toast';
import LoadingDots from '../LoadingDots';

interface Props {
  id: number;
}

const BlogPost = ({ id }: Props) => {
  const [showLikeToast, setShowLikeToast] = useState(false);
  const { blog, isLoading, isError } = useBlogPost(id);
  const { totalComments } = useComments(id);
  const { formattedPost } = useFormatBlog(blog);
  const { tags } = useTags();

  const loaded = !isLoading && blog && tags;
  if (loaded) {
    const { created_at, title, user_id, tags: tagIds, image_url } = blog;
    const date = dayjs(created_at).format(`MMMM DD, YYYY`);
    const dateProp = dayjs(created_at).format(`YYYY-MM-DD `);
    const featuredTag = tags.find((tag: Tag) => tag.id === tagIds[0]);

    return (
      <>
        <article className='max-w-2xl px-6 py-8 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50'>
          <div className='w-full mx-auto space-y-2 text-center'>
            <p className='text-xs font-semibold tracking-wider uppercase text-indigo-500'>
              #{featuredTag?.name}
            </p>
            <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
              {title}
            </h1>
            <p className='text-sm dark:text-gray-400'>
              by{' '}
              <a
                rel='noopener noreferrer'
                href='#'
                target='_blank'
                className='underline dark:text-violet-400  text-indigo-500'
              >
                <span itemProp='name'>{user_id}</span>
              </a>{' '}
              on <time dateTime={dateProp}>{date}</time>
            </p>
          </div>
          <div className='container mx-auto flex px-5 items-center justify-center flex-col'>
            <Image
              className='object-cover object-center rounded'
              alt='hero'
              src={image_url}
              width={800}
              height={600}
            />
          </div>
          {showLikeToast ? (
            <Toast
              message='Thanks for liking the post!'
              type='info'
              icon='like'
            />
          ) : (
            <> </>
          )}
          <div className=''>
            <div className='text-center leading-none flex justify-center bottom-0 left-0 w-full '>
              <LikeButton
                blog_id={id}
                showLikeToast={showLikeToast}
                setShowLikeToast={setShowLikeToast}
              />
              <button className='inline-flex items-center dark:bg-gray-800 bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
                <span className='dark:text-gray-500 text-gray-200 inline-flex items-center leading-none text-sm'>
                  <CommentBubbleIcon className='w-4 h-4 mr-1' />
                  {totalComments}
                </span>
              </button>
            </div>
          </div>
          {/**
           * Blog post content
           */}
          <div className=' mx-auto flex px-5  flex-col'>
            <div
              dangerouslySetInnerHTML={{ __html: formattedPost }}
              className='prose md:prose-lg dark:text-gray-100'
            />
          </div>
          <div className='pt-12 border-t dark:border-gray-700'>
            <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row'>
              <Image
                src={
                  'https://res.cloudinary.com/dy1wn2sll/image/upload/v1685315413/122839218_3502209176533440_5317374885244929571_n_fdpgod.jpg'
                }
                alt=''
                className='self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700'
                width={800}
                height={600}
              />
              <div className='flex flex-col'>
                <h4 className='text-lg font-semibold'>{user_id}</h4>
                <p className='dark:text-gray-400'>
                  Experienced full-stack web and software developer from the
                  Washington, DC Metro Area in the USA. Passions include
                  software development, data visualizations, blogging, and being
                  a dad.
                </p>
              </div>
            </div>
          </div>
          <Comments blog_id={id} />
        </article>
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

export default BlogPost;
