import { Blog } from '@/types/Blog';
import Image from 'next/image';
import LoadingDots from '../LoadingDots';

interface Props {
  blog?: Blog;
}

const Hero = ({ blog }: Props) => {
  if (blog) {
    const { title, description, image_url, id } = blog;

    return (
      <>
        <section className='text-gray-400 bg-gray-900 body-font'>
          <h3 className='sm:text-2xl text-1xl font-medium title-font text-center text-white p-2 border-b border-gray-800'>
            Featured Post
          </h3>
          <div className='container mx-auto flex px-5 py-16 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
                {title}
              </h1>
              <p className='mb-8 leading-relaxed'>{description}</p>
              <div className='flex justify-center'>
                <a href={`/blog/${id}`}>
                  <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded '>
                    Read this post
                  </button>
                </a>
                <a href='/blog'>
                  <button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded '>
                    See all posts
                  </button>
                </a>
              </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
              <Image
                className='object-cover object-center rounded'
                alt='hero'
                src={image_url}
                width={800}
                height={600}
              />
            </div>
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

export default Hero;
