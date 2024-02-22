import React from 'react';
import { logoMobile, logoDesktop } from '@/assets/icons/index';
import Image from 'next/image';

import HeaderBtnList from '@/components/HeaderBtnList/HeaderBtnList';
import HeaderNav from '@/components/HeaderNav/HeaderNav';
import Local from '../../components/Local/Local';

export interface HeaderProps {
  lng: string;
}

const Header = ({ lng }: HeaderProps) => {
  return (
    <header className="py-[8px] px-[12px] mx-auto bg-main-white rounded-lg max-lg:max-w-[367px] lg:py-[16px] lg:px-[24px] max-w-[1576px]">
      <div className="flex justify-between">
        <Image src={logoMobile} alt="Mobile logo" width={67} height={28} className="lg:hidden" />
        <Image
          src={logoDesktop}
          alt="Desktop logo"
          width={214}
          height={48}
          className="max-lg:hidden"
        />
        <Local lng={lng} />
        <HeaderNav lng={lng} />
        <HeaderBtnList lng={lng} />
      </div>
    </header>
  );
};

export default Header;
