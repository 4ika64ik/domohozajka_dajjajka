import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
type TButtonColor = 'primary' | 'dark';
type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  color?: TButtonColor
};

export const BuyButton: FC<TAppButton> = ({ children, color, ...props }) => {
  return (
    <button
      {...props}
      className={` text-blueViolet border border-blueViolet
        md:w-auto sm:w-32 rounded py-2 w-40 transition font-medium font-roboto hover:bg-purple-100
        ${props.className || ''}`
      }
    >
      {children}
    </button>
  );
};
