'use client';

import { bell, cart, favorite, menu, user } from '@/assets/icons';
import Image from 'next/image';
import { useTranslation } from '@/app/i18n/client';
export interface HeaderBtnListProps {
  lng: string;
}
const HeaderBtnList = ({ lng }: HeaderBtnListProps) => {
  const { t } = useTranslation(lng);

  return (
    <ul className="flex max-w-[172px] lg:max-w-[330px] w-full justify-between">
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={bell} alt="bell" className="max-lg:width-[20px] width-[24px]" />
        </button>
      </li>
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={favorite} alt="favorite" className="max-lg:width-[20px] width-[24px]" />
        </button>
      </li>
      <li>
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray"
        >
          <Image src={user} alt="user" className="max-lg:width-[20px] width-[24px]" />
        </button>
      </li>
      <li className="lg:hidden">
        <button
          type="button"
          className="lg:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray "
        >
          <Image src={menu} alt="menu" width={20} height={20} />
        </button>
      </li>
      <li className="max-lg:hidden">
        <button
          type="button"
          className="md:p-[16px] p-[10px] rounded-xl border-[1px] border-br-gray text-sm flex gap-[8px]"
        >
          {t('cart')}
          <Image src={cart} alt="cart" width={24} height={24} style={{ width: 24, height: 24 }} />
        </button>
      </li>
    </ul>
  );
};

export default HeaderBtnList;
