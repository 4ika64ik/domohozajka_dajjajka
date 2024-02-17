import { FC } from "react";
import { HeroSection } from 'components/Sections/HeroSection/HeroSection.tsx';
import Logo from '@/assets/icons/header/Logo.svg';
import Profile from '@/assets/icons/header/Profile.svg';
import Cart from '@/assets/icons/header/CartShopping.svg';
export const TheHeader: FC = () => {
  return (
    <header className="bg-heroGradient h-[680px] md:h-auto sm:h-auto">
      <div className="flex justify-between py-[35px] px-9 lg:px-8">
        <div>
          <img src={Logo} alt="Logo"/>
        </div>
        <nav className="sm:hidden">
          <ul className="flex items-center gap-[30px]">
            <li className="font-medium text-xl leading-[22px] text-white transition duration-300 delay-75 border-b-2 border-b-transparent hover:border-white cursor-pointer">Courses</li>
            <li className="font-medium text-xl leading-[22px] text-white transition duration-300 delay-75 border-b-2 border-b-transparent hover:border-white cursor-pointer">Pricing</li>
            <li className="font-medium text-xl leading-[22px] text-white transition duration-300 delay-75 border-b-2 border-b-transparent hover:border-white cursor-pointer">About Us</li>
            <li className="font-medium text-xl leading-[22px] text-white transition duration-300 delay-75 border-b-2 border-b-transparent hover:border-white cursor-pointer">Contact Us</li>
          </ul>
        </nav>
        <div className="flex gap-[30px] md:hidden">
          <div className="flex">
            <img src={Profile} alt="Profile"/>
            <span className="font-medium text-xl leading-[22px] text-white">Account</span>
          </div>
          <div className="flex">
            <img src={Cart} alt="Cart"/>
            <span className="font-medium text-xl leading-[22px] text-white">Cart</span>
          </div>
        </div>
      </div>
      <HeroSection/>
    </header>
  )
}



























