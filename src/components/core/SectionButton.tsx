import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
type TButtonColor = 'primary' | 'dark';
type TAppButton = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
  color?: TButtonColor
};

export const SectionButton: FC<TAppButton> = ({ children, color, ...props }) => {
  return (
    <button
      {...props}
      className={` text-gray200 bg-gray50
        md:w-auto rounded py-2 w-40 transition font-medium font-roboto
        ${props.className || ''}`
      }
    >
      {children}
    </button>
  );
};
