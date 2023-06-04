'use client';
import Hero from '@/components/Hero';
import useBlogList from '@/hooks/useBlogList';
import { Blog } from '@/types/Blog';

function getRandomPost(array: Blog[]) {
  if (!array) return;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function Home() {
  const { blogList } = useBlogList();

  return (
    <>
      <Hero blog={getRandomPost(blogList)} />
      <div className='flex flex-wrap w-full mb-20'>
        <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 dark:text-gray-50'>
            Blogs About Tech
          </h1>
          <div className='h-1 w-20 bg-indigo-500 rounded'></div>
        </div>
        <p className='lg:w-1/2 w-full leading-relaxed dark:text-gray-400 text-opacity-90'>
          Welcome to my blog, where I&apos;ll be sharing information I&apos;ve
          learned or tips that have helped me throughout my career. Thanks for
          reading and happy coding!
        </p>
      </div>
    </>
  );
}
