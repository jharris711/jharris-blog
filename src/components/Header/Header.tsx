import AuthButton from '../AuthButton';

const Header = () => {
  return (
    <>
      <header className='text-gray-400 bg-gray-900 body-font sticky top-0'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a
            href='/'
            className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25'
              />
            </svg>
            <span className='ml-3 text-xl'>J. Harris Web Dev</span>
          </a>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
            <a href='/blog' className='mr-5 hover:text-white'>
              Blogs
            </a>
            <a href='/demo' className='mr-5 hover:text-white'>
              Demos
            </a>
            <a href='/contact' className='mr-5 hover:text-white'>
              Contact
            </a>
          </nav>
          <AuthButton />
        </div>
      </header>
    </>
  );
};

export default Header;
