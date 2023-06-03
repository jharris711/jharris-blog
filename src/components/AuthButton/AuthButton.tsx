'use client';
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        <div className='pl-2'>
          <SignUpButton />
        </div>
        <div className='pl-2'>
          <SignInButton />
        </div>
      </SignedOut>
    </>
  );
};

export default AuthButton;
