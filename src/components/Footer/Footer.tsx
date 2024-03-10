import { FC } from 'react';
import { TelegramIcon, WhatsAppIcon } from 'components/core/icons';

export const TheFooter: FC = () => {
  return (
    <footer className="bg-blue-400 mt-10 px-24 sm:px-2">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:items-end md:gap-[134px] gap-20 md:mb-[mb-2] mb-2">
          <div className="flex flex-col py-4">
            <div className="flex gap-4">
              <a href="https:t.me/">
                <TelegramIcon />
              </a>
              <a href="https://wa.me/">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="text-white">
          <p className="text-xxl pb-8 sm:text-sm">Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
