import {FC} from "react";
import {AppButton} from 'components/core/AppButton.tsx';
import HeroImg from '@/assets/images/upgrade/Saly.png'

export const HeroSection: FC = () => {
  return (
    <section className="mx-auto grid grid-cols-2 py-6 sm:grid-cols-1 px-20 sm:px-2 sm:py-0">
      <div>
        <h1 className="text-white text-6xl font-bold py-6 sm:text-4xl">
          Upgrade YOUR skills for better future
        </h1>
        <p className="text-white text-2xl sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem inventore ipsum quas repellendus ut
          voluptatem. Facilis libero magnam tempore voluptatibus.
        </p>
          <div className="my-5 sm:my-5">
            <AppButton className="bg-pinkDark py-3 w-40 sm:w-full mr-2 sm:my-3 hover:bg-white hover:text-black">
              Check Courses
            </AppButton>
            <AppButton className="border py-3 w-40 sm:w-full hover:bg-white hover:text-black">
              Learn More
            </AppButton>
          </div>
      </div>
      <div className="my-[-200px] md:my-3 sm:my-0">
        <img src={HeroImg} alt=""/>
      </div>
    </section>
  )
}