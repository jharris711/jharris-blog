'use client';
import { useState } from 'react';
import { useRef, LegacyRef } from 'react';
import dayjs from 'dayjs';
import {
  SignedIn,
  SignedOut,
  useAuth,
  useSession,
  useUser,
} from '@clerk/nextjs';
import useComments from '@/hooks/useComments';
import Toast from '../Toast';
import { Comment } from '@/types/Comment';

interface Props {
  blog_id: number;
}

const Comments = ({ blog_id }: Props) => {
  const formRef = useRef<any>();
  const [showToast, setShowToast] = useState(false);
  const { session } = useSession();
  const { userId } = useAuth();
  const { user } = useUser();
  const { commentList, addComment } = useComments(blog_id, session);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!formRef) return;

    const formData = new FormData(formRef.current);

    const data = {
      comment: formData.get('comment'),
    };

    if (!data.comment) return;

    const comment = {
      blog_id,
      user_id: userId,
      username: user?.fullName,
      content: String(data.comment),
    };

    addComment(comment);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (commentList) {
    return (
      <>
        {showToast && (
          <Toast message='Comment added!' type='success' icon='comment' />
        )}
        <section className='text-gray-400 bg-gray-900 body-font '>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                Comments
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                <SignedIn>Let me know what you think!</SignedIn>
                <SignedOut>Sign in to let me know what you think!</SignedOut>
              </p>
            </div>
            <SignedIn>
              <div className='mx-auto px-4'>
                <div className='flex flex-wrap -m-2'>
                  <form
                    className='w-full'
                    ref={formRef}
                    onSubmit={handleSubmit}
                  >
                    <div className='p-2 w-full'>
                      <div className=''>
                        <label
                          htmlFor='message'
                          className='leading-7 text-sm text-gray-400'
                        >
                          Your Comment
                        </label>
                        <textarea
                          id='comment'
                          name='comment'
                          className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                        ></textarea>
                      </div>
                    </div>
                    <div className='p-2 w-full'>
                      <button
                        type='submit'
                        className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className='p-2 w-full pt-4 mt-8 border-t border-gray-800'>
                    {commentList.map((comment: Comment) => {
                      const date = dayjs(comment.created_at).format(
                        `MMMM DD, YYYY HH:mm:ss`
                      );
                      const dateProp = dayjs(comment.created_at).format(
                        `YYYY-MM-DD HH:mm:ss`
                      );
                      return (
                        <>
                          <div className='md:flex-grow p-4 border-b border-gray-800'>
                            <p className='text-sm dark:text-gray-400'>
                              <a
                                rel='noopener noreferrer'
                                href='#'
                                target='_blank'
                                className='underline dark:text-violet-400'
                              >
                                <span itemProp='name'>{comment.username}</span>
                              </a>{' '}
                              on <time dateTime={dateProp}>{date}:</time>
                            </p>
                            <p className='leading-relaxed'>{comment.content}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SignedIn>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className='text-gray-400 bg-gray-900 body-font '>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              Comments
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Let me know what you think!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comments;
