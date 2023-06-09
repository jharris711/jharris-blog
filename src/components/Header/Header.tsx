import CubeIcon from '@/svgIcons/CubeIcon';
import AuthButton from '../AuthButton';

const Header = () => {
  return (
    <>
      <header className='dark:text-gray-400 dark:bg-gray-900 bg-gray-100 body-font sticky top-0'>
        <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
          <a
            href='/'
            className='flex title-font font-medium items-center dark:text-white mb-4 md:mb-0'
          >
            <CubeIcon className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full' />
            <span className='ml-3 text-xl'>J. Harris Web Dev</span>
          </a>
          <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
            <a
              href='/blog'
              className='mr-5 hover:dark:text-white hover:text-indigo-500'
            >
              Blogs
            </a>
            <a
              href='/demo'
              className='mr-5 hover:dark:text-white hover:text-indigo-500'
            >
              Demos
            </a>
            <a
              href='/contact'
              className='mr-5 hover:dark:text-white hover:text-indigo-500'
            >
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
