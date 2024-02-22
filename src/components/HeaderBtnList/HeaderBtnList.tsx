'use client';

import { bell, cart, favorite, menu, user } from '@/assets/icons';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from '@/app/i18n/client';
export interface HeaderBtnListProps {
  lng: string;
}
const HeaderBtnList = ({ lng }: HeaderBtnListProps) => {
  const isMobile = useMediaQuery({ maxWidth: 1575 });
  const { t } = useTranslation(lng);

  return (
    <ul className="flex max-w-[172px] lg:max-w-[330px] w-full justify-between">
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={bell} alt="bell" width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />
        </button>
      </li>
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={favorite} alt="bell" width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />
        </button>
      </li>
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={user} alt="bell" width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} />
        </button>
      </li>
      <li className="lg:hidden">
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray "
        >
          <Image src={menu} alt="bell" width={20} height={20} />
        </button>
      </li>
      <li className="max-lg:hidden">
        <button
          type="button"
          className="md:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray text-sm flex gap-[8px]"
        >
          {t('cart')}
          <Image src={cart} alt="bell" width={24} height={24} />
        </button>
      </li>
    </ul>
  );
};

export default HeaderBtnList;
