'use client';
import { useRef, useState } from 'react';
import Toast from '../Toast';
import SendIcon from '@/svgIcons/SendIcon';
import FacebookIcon from '@/svgIcons/FacebookIcon';
import TwitterIcon from '@/svgIcons/TwitterIcon';
import GithubIcon from '@/svgIcons/GithubIcon';
import LinkedInIcon from '@/svgIcons/LinkedInIcon';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const formRef = useRef<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    setIsSending(true);

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setShowToast(true);
        setToastType('success');
        setToastMessage('Message sent successfully!');
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((err) => {
        setShowToast(true);
        setToastType('error');
        setToastMessage(err.message);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .finally(() => {
        event.target.reset();
        setIsSending(false);
      });
  };

  return (
    <>
      {isSending ? (
        <Toast type={'info'} message={'Sending...'} icon={'message'} />
      ) : (
        <> </>
      )}
      {showToast ? (
        <Toast type={toastType} message={toastMessage} icon={'message'} />
      ) : (
        <> </>
      )}
      <section className='dark:text-gray-400 text-gray-800 dark:bg-gray-900 rounded body-font '>
        <div className='container px-5 py-12 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white'>
              Contact Us
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Reach out to us for any inquiries, feedback, or collaboration
              opportunities!
            </p>
          </div>
          <form
            className='lg:w-1/2 md:w-2/3 mx-auto'
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className=''>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm dark:text-gray-400 text-indigo-500'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:dark:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className=''>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm dark:text-gray-400 text-indigo-500'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:dark:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className=''>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm dark:text-gray-400 text-indigo-500'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full dark:bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:dark:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  type='submit'
                  className='flex flew-row mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                >
                  <SendIcon className='w-5 h-5 m-1' />
                  Submit
                </button>
              </div>
              <div className='p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center'>
                <a className='text-indigo-500'>josh@jsharris.dev</a>
                <p className='leading-normal my-5'>Washington, DC Metro-Area</p>
                <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                  <a
                    href='https://www.facebook.com/jharriswebdev'
                    target='_blank'
                    className=' text-indigo-500 dark:text-gray-400'
                  >
                    <FacebookIcon className='w-5 h-5' />
                  </a>
                  <a
                    href='https://twitter.com/jheeeeezy'
                    target='_blank'
                    className='ml-3  text-indigo-500 dark:text-gray-400'
                  >
                    <TwitterIcon className='w-5 h-5' />
                  </a>
                  <a
                    href='https://github.com/jharris711'
                    target='_blank'
                    className='ml-3  text-indigo-500 dark:text-gray-400'
                  >
                    <GithubIcon className='w-5 h-5' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/joshsharris/'
                    target='_blank'
                    className='ml-3  text-indigo-500 dark:text-gray-400'
                  >
                    <LinkedInIcon className='w-5 h-5' />{' '}
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
