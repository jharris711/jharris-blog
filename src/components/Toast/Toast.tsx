import ThumbsUp from '@/svgIcons/ThumbsUp';
import CommentBubble from '@/svgIcons/CommentBubble';
import SendMsg from '@/svgIcons/SendMsg';

interface Props {
  message: string;
  type: string;
  icon: string;
}

const infoClasses =
  'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200';
const successClasses =
  'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200';
const warningClasses =
  'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200';
const errorClasses =
  'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200';

const toastType = (type: string) => {
  switch (type) {
    case 'info':
      return infoClasses;
    case 'success':
      return successClasses;
    case 'warning':
      return warningClasses;
    case 'error':
      return errorClasses;
    default:
      return infoClasses;
  }
};

const toastIcon = (icon: string) => {
  switch (icon) {
    case 'like':
      return <ThumbsUp className='w-4 h-4 mr-1' />;
    case 'comment':
      return <CommentBubble className='w-4 h-4 mr-1' />;
    case 'message':
      return <SendMsg className='w-4 h-4 mr-1' />;
    default:
      return <ThumbsUp className='w-4 h-4 mr-1' />;
  }
};

const Toast = ({ message, type }: Props) => {
  return (
    <>
      <div
        className='fixed left-16 bottom-16 z-50'
        style={{ pointerEvents: 'none' }}
      >
        <div
          id='toast-bottom-left'
          className='flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-200 dark:bg-gray-700'
          role='alert'
        >
          <div
            className={`${toastType(
              type
            )} inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-center`}
          >
            {toastIcon(type)}
            <span className='sr-only'>Thumbs Up icon</span>
          </div>
          <div className='ml-3 text-sm font-normal'>{message}</div>
        </div>
      </div>
    </>
  );
};

export default Toast;
