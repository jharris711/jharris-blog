import FacebookIcon from '@/svgIcons/FacebookIcon';
import TwitterIcon from '@/svgIcons/TwitterIcon';
import GithubIcon from '@/svgIcons/GithubIcon';
import LinkedInIcon from '@/svgIcons/LinkedInIcon';
import CubeIcon from '@/svgIcons/CubeIcon';

const Footer = () => {
  return (
    <>
      <footer className='text-gray-400 bg-gray-900 body-font sticky bottom-0'>
        <div className='container px-4 py-3 mx-auto flex items-center sm:flex-row flex-col'>
          <a
            href='/'
            className='flex title-font font-medium items-center md:justify-start justify-center text-white'
          >
            <CubeIcon className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full' />
            <span className='ml-3 text-xl'>J. Harris Web Dev</span>
          </a>
          <p className='text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
            © 2023 J. Harris Web Dev —
            <a
              href='https://twitter.com/jheeeeezy'
              className='text-gray-500 ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              @jheeeeezy
            </a>{' '}
            -{' '}
            <a
              href='https://www.freeprivacypolicy.com/live/54e972fa-81c1-4db0-9902-6f223497af56'
              className='text-gray-500 ml-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Privacy Policy
            </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a
              href='https://www.facebook.com/jharriswebdev'
              target='_blank'
              className='text-gray-400'
            >
              <FacebookIcon className='w-5 h-5' />
            </a>
            <a
              href='https://twitter.com/jheeeeezy'
              target='_blank'
              className='ml-3 text-gray-400'
            >
              <TwitterIcon className='w-5 h-5' />
            </a>
            <a
              href='https://github.com/jharris711'
              target='_blank'
              className='ml-3 text-gray-400'
            >
              <GithubIcon className='w-5 h-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/joshsharris/'
              target='_blank'
              className='ml-3 text-gray-400'
            >
              <LinkedInIcon className='w-5 h-5' />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
