import { FC } from "react";
import Key from '@/assets/icons/OurFeatures/Key.svg';
import Monitor from '@/assets/icons/OurFeatures/Monitor.svg';
import GetCertificate from '@/assets/icons/OurFeatures/Group.svg';
import User from '@/assets/icons/OurFeatures/User.svg';
import BadgeCheck from '@/assets/icons/OurFeatures/BadgeCheck.svg';
import BestPrice from '@/assets/icons/OurFeatures/BestPrice.svg';

const Icons = [Key, Monitor, GetCertificate];
const Icons2 = [User, BadgeCheck, BestPrice];
const Title = ['Life Time Access', 'Online Classes', 'Get Certificate', 'Expert Trainers', 'Great Result', 'Best Price'];

export const CardFeatures: FC = () => {
  return (
    <div className="grid justify-center mx-32 my-20 md:mx-2 sm:mx-2">
      <div className="grid grid-cols-3 gap-20 mx-auto sm:grid-cols-1 sm:text-center">
        {Icons.map((icon, index) => (
          <div key={index}>
            <img className="sm:mx-auto sm:my-auto" src={icon} alt="icon" />
            <h3 className="text-2xl font-bold sm:text-center">{Title[index]}</h3>
            <p className="text-lightGray text-xl sm:text-sm sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi</p>
            <img className="sm:mx-auto sm:my-auto" src={Icons2[index]} alt="icon" />
            <h3 className="text-2xl font-bold sm:text-center">{Title[index]}</h3>
            <p className="text-lightGray text-xl sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in porttitor in sit sem eu, nunc diam. Quis nisi</p>
          </div>
        ))}
      </div>
    </div>
  );
};
