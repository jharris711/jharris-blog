'use client';
import { Dispatch, SetStateAction } from 'react';
import { useAuth, useSession } from '@clerk/nextjs';
import useLikes from '@/hooks/useLikes';
import ThumbsUpIcon from '@/svgIcons/ThumbsUpIcon';

interface Props {
  blog_id: number;
  showLikeToast?: boolean;
  setShowLikeToast: Dispatch<SetStateAction<boolean>>;
}

const LikeButton = ({ blog_id, setShowLikeToast }: Props) => {
  const { session } = useSession();
  const { userId } = useAuth();
  const { likes, usersLike, likePost, unlikePost } = useLikes(
    blog_id,
    userId,
    session
  );

  const handleLike = async () => {
    if (!userId) return;
    if (!usersLike) {
      await likePost({
        user_id: userId,
        blog_id,
        active: true,
      });
      setShowLikeToast(true);
      setTimeout(() => {
        setShowLikeToast(false);
      }, 3000);
    }
    if (usersLike && usersLike.id) {
      await unlikePost(usersLike.id);
    }
  };

  return (
    <>
      <button
        onClick={handleLike}
        className='inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
      >
        <span className=' text-gray-200 inline-flex items-center leading-none text-sm'>
          <ThumbsUpIcon
            className='w-4 h-4 mr-1'
            fill={usersLike ? true : false}
          />
          {(likes && likes.length) ?? 0}
        </span>
      </button>
    </>
  );
};

export default LikeButton;
