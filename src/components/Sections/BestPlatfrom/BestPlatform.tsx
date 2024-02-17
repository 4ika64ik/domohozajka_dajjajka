import { FC } from "react";
import { AppButton } from 'components/core/AppButton.tsx';
import BestPlatformImg from '@/assets/images/BestPlatform/BestPlatform.png';

export const BestPlatform: FC = () => {
  return (
    <div className="flex justify-between px-24 gap-20 py-7 md:px-2 sm:px-2 xs:px-2 sm:grid sm:grid-cols-1">
      <img src={BestPlatformImg} alt="best-platform"/>
      <h3 className="text-6xl py-28 font-bold md:text-5xl md:text-center md:py-1 sm:py-1 xs:py-1 ">
        Best Platform to grow
        <p className="text-xl font-normal py-7 text-lightGray md:text-center md:text-sm sm:text-center sm:text-sm xs:text-center xs:text-sm">Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum tortor viverra vel .</p>
        <AppButton className="bg-purple50 hover:bg-purple-50 hover:text-purple-500 hover:border hover:border-purple-500">
          Learn more
        </AppButton>
      </h3>
    </div>
  )
}