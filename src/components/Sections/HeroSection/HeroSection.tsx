import {FC} from "react";
import HeroImg from '@/assets/images/upgrade/Cleaning.png'
import { Link } from "react-router-dom";

export const HeroSection: FC = () => {
  return (
    <section className="mx-auto grid grid-cols-2 py-6 sm:grid-cols-1 px-20 sm:px-2 sm:py-0">
      <div>
        <h1 className="text-white text-6xl font-bold py-6 sm:text-4xl">
          Ищем сотрудников
        </h1>
        <p className="text-white  text-xl  sm:text-sm">
          Мы компания которая ищет своим клиентам новых работников, к каждому желающему работать предоставляем своего менеджера который напрямую контактирует с вами и работодателем
        </p>
          <div className="my-8 sm:my-5">
            <Link to="/form" className="border border-purple-50 px-20 py-2 sm:w-full sm:px-12 bg-white text-black  transition delay-75 duration-300 transform hover:scale-110 rounded">
              Оставить заявку
            </Link>
          </div>
      </div>
      <div className="my-[-200px] md:my-3 sm:my-0">
        <img src={HeroImg} alt=""/>
      </div>
    </section>
  )
}