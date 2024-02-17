import { FC } from "react";
import { CardFeatures } from 'components/Sections/Features/CardFeatures.tsx';

export const OurFeatures: FC = () => {
  return(
    <div>
      <h2 className="text-center mt-20 text-6xl font-bold sm:text-5xl">
        Our Features and Services
      </h2>
      <p className="text-center text-lightGray my-3 text-xl sm:text-sm">
        Lorem ipsum dolor sit amet consectetur. Euismod diam phasellus quis aliquet purus sem ornare mollis vulputate. Sapien purus faucibus massa pharetra.
      </p>
      <CardFeatures />
    </div>
  )
}