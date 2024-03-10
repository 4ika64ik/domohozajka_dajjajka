import { FC } from "react";
import { HeroSection } from 'components/Sections/HeroSection/HeroSection.tsx';
export const TheHeader: FC = () => {
  return (
    <header className="bg-blue-400 h-[680px] md:h-auto sm:h-auto">
      <div className="flex justify-between py-[35px] px-9 lg:px-8">
        <div className="text-white px-12 font-bold md:px-1 sm:px-1 text-4xl md:text-xl">
          DomRabotaEU
        </div>
      </div>
      <HeroSection/>
    </header>
  )
}