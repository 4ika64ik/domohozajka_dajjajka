import { FC } from "react";
import { SectionButton } from 'components/core/SectionButton.tsx';
import { BuyButton } from 'components/core/BuyButton.tsx';

import AI from '@/assets/images/ourCourses/ai.png';
import UiUx from '@/assets/images/ourCourses/UiUx.png';
import CompleteUiUX from '@/assets/images/ourCourses/CompleteUiUX.png';
import Fullstack from '@/assets/images/ourCourses/FullStack.png';
import JsForBeginners from '@/assets/images/ourCourses/JsForBeginners.png';
import DigitalMarketing from '@/assets/images/ourCourses/DigitalMarketing.png';
import DigitalMarketingCourse from '@/assets/images/ourCourses/DigitalMarketingCourse.png';
import UserExperience from '@/assets/images/ourCourses/UserExperience.png';
import Stars from '@/assets/icons/OutPartners/Stars.svg';
const CardsTitle = ['Modern Artificial Intelligence with zero coding', 'Figma UX/UI Design essentials', 'Complete figma mega course: UX/UI Design Beginner to Expert', 'The Complete 2024 Fullstack Web Developer course', 'Javascript for beginners', 'Digital Advertising and Marketing 101: The Complete Guide', 'Mega Digital Marketing course: 12 Courses in 1', 'User Experience Design Essentials'];

const CardsAuthor = ['Jhon David', 'Daniel Walter Scott', 'Kaleb Kingston', 'Mark Lassoff', 'Jhon David', 'Ben Silverstain', 'Phil Ebiner', 'Jacob Murphy'];
const ButtonTitle = ['Artificial Intelligence', 'UX/UI Designing', 'UX/UI Designing', 'Web Development', 'Web Development', 'Digital Marketing', 'Digital Marketing', 'UX/UI Designing' ]
const Images = [AI, UiUx, CompleteUiUX, Fullstack, JsForBeginners, DigitalMarketing, DigitalMarketingCourse, UserExperience];
const StarsImg = [Stars, Stars, Stars, Stars, Stars, Stars, Stars, Stars];

export const Cards: FC = () => {
  return (
    <section className="grid grid-cols-4 md:grid-cols-2 px-20 sm:grid-cols-1 md:px-36 sm:px-16 ">
      {CardsTitle.map((title, index) => (
        <div key={index}>
          <img className="cursor-pointer" src={Images[index]} alt={title} />
          <SectionButton className="my-4">
            {ButtonTitle[index]}
          </SectionButton>
          <div className="">
            <h3 className="font-bold w-64">{title}</h3>
            <p>{CardsAuthor[index]}</p>
            <img src={StarsImg[index]} alt="Stars"/>
            <div className="flex gap-4 pb-8">
              <p className="text-purple500 font-bold text-2xl">$ 49.99</p>
              <BuyButton>
                Buy Now
              </BuyButton>
          </div>
          </div>
        </div>
      ))}
    </section>
  )
}

