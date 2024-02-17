import { FC } from "react";
import Microsoft from '@/assets/icons/OutPartners/Microsoft.svg';
import ThreeHouse from '@/assets/icons/OutPartners/Treehouse.svg';
import Amazon from '@/assets/icons/OutPartners/Amazon.svg';
import Slack from '@/assets/icons/OutPartners/Slack.svg';

const Icons = [Microsoft, ThreeHouse, Amazon, Slack];

export const OurPartners: FC = () => {
  return (
    <div className="my-11">
      <h1 className="text-grayLight text-center text-6xl font-bold sm:text-2xl">
        Our Company and Partners
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 px-44 py-8 md:gap-6 sm:px-5">
        {Icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} />
        ))}
      </div>
    </div>
  );
};