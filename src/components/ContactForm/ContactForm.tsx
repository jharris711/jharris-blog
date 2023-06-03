'use client';
import { useRef, useState } from 'react';
import Toast from '../Toast';

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
        console.log('Send Msg Response:', jsonData);

        setShowToast(true);
        setToastType('success');
        setToastMessage('Message sent successfully!');
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((err) => {
        console.log('err', err);

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
      <section className='text-gray-400 bg-gray-900 body-font '>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
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
                    className='leading-7 text-sm text-gray-400'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className=''>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-gray-400'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className=''>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm text-gray-400'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Button
                </button>
              </div>
              <div className='p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center'>
                <a className='text-indigo-400'>jharriswebdev@gmail.com</a>
                <p className='leading-normal my-5'>Washington, DC Metro-Area</p>
                <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                  <a
                    href='https://www.facebook.com/jharriswebdev'
                    target='_blank'
                    className='text-gray-400'
                  >
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/jheeeeezy'
                    target='_blank'
                    className='ml-3 text-gray-400'
                  >
                    <svg
                      fill='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </a>
                  <a
                    href='https://github.com/jharris711'
                    target='_blank'
                    className='ml-3 text-gray-400'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      className='w-5 h-5'
                    >
                      <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z'></path>
                    </svg>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/joshsharris/'
                    target='_blank'
                    className='ml-3 text-gray-400'
                  >
                    <svg
                      fill='currentColor'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='0'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='none'
                        d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                      ></path>
                      <circle cx='4' cy='4' r='2' stroke='none'></circle>
                    </svg>
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
