import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type TButtonColor = 'primary' | 'dark';

type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  color?: TButtonColor
};

const getColor = (color?: TButtonColor) => {
  switch (color) {
    case 'primary':
      return 'bg-primary hover:bg-primary-800';
    case 'dark':
      return 'bg-dark';
    default:
      return 'bg-primary hover:bg-primary-dark';
  }
};

export const AppButton: FC<TAppButton> = ({ children, color, ...props }) => {
  return (
    <button
      {...props}
      className={`text-white transition w-56 py-2 font-normal rounded-lg lg:w-36 lg:py-2 lg:text-xl md:text-lg md:w-40 sm:text-sm sm:w-full
        ${getColor(color)}
        ${props.className || ''}`
      }
    >
      {children}
    </button>
  );
};
