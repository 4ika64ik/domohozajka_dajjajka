import { FC } from "react";
import { AppButton } from 'components/core/AppButton.tsx';
import SupportImg from '@/assets/images/SupportSection/Support.png';

export const SupportSection: FC = () => {
  return (
    <div className="flex justify-between gap-40 px-24 lg:flex  lg:justify-between lg:px-24 md:grid md:grid-cols-1 md:px-2 sm:grid sm:grid-cols-1 sm:px-2 xs:grid xs:grid-cols-1 xs:px-2">
        <h3 className="text-6xl py-28 font-bold lg:text-6xl lg:py-28 md:text-5xl md:py-20 md:text-center">
          24/7 Students Support
          <p className="text-xl font-normal my-4 text-lightGray lg:text-xl md:text-lg sm:text-sm ">Lorem ipsum dolor sit amet consectetur. Sit est lacus blandit elementum amet elit. Varius faucibus sit donec molestie. Vulputate sodales diam et ut erat tempor. Tempor condimentum sodales morbi nunc.</p>
          <AppButton className="bg-blueViolet hover:bg-purple-50 hover:text-purple-500 hover:border hover:border-purple-500">
            Read more
          </AppButton>
        </h3>
      <img className="md:mx-auto md:my-auto sm:my-[-200px]" src={SupportImg} alt="Support"/>
    </div>
  )
}
