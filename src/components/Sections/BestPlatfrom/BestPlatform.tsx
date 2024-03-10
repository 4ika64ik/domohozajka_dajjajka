import { FC } from "react";
import BestPlatformImg from '@/assets/images/BestPlatform/BestPlatform.png';
import {Link} from "react-router-dom";

export const BestPlatform: FC = () => {
  return (
    <div className="flex justify-between px-24 gap-20 py-7 md:px-2 sm:px-2 xs:px-2 sm:grid sm:grid-cols-1">
      <img src={BestPlatformImg} alt="best-platform"/>
      <h3 className="text-6xl py-28 font-bold md:text-5xl md:text-center md:py-1 sm:py-1 xs:py-1 ">
        Наша цель
        <p className="text-xl font-normal py-7 text-lightGray md:text-center md:text-sm sm:text-center sm:text-sm xs:text-center xs:text-sm">Наша цель - создать комфортные условия для успешного трудоустройства и обеспечить эффективное взаимодействие между сторонами. Мы гарантируем индивидуальный подход к каждому кандидату и работодателю, стремясь к достижению взаимной выгоды и долгосрочных партнерских отношений. Вместе мы создаем успешные и продуктивные рабочие среды, способствующие развитию бизнеса и карьерного роста.</p>
        <Link to="/form">
          <button className="text-lg font-normal bg-blue-400 text-white px-5 py-2 rounded md:w-full sm:w-full hover:bg-blue-50 hover:border hover:border-blue-400 hover:text-blue-400 transition delay-75 duration-300 transform hover:scale-110">
            Оставить заявку
          </button>
        </Link>

      </h3>
    </div>
  )
}