import { FC } from "react";
import { CardFeatures } from 'components/Sections/Features/CardFeatures.tsx';

export const OurFeatures: FC = () => {
  return(
    <div>
      <h2 className="text-center mt-20 text-6xl font-bold sm:text-5xl ">
        Условия работы
      </h2>
      <CardFeatures />
    </div>
  )
}