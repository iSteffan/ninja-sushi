import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderBtnList from '@/components/HeaderBtnList/HeaderBtnList';
import HeaderNav from '@/components/HeaderNav/HeaderNav';
import Local from '../../components/Local/Local';
import { logoMobile, logoDesktop } from '@/assets/icons/index';

export interface HeaderProps {
  lng: string;
}

const Header = ({ lng }: HeaderProps) => {
  return (
    <header className="py-[8px] px-[12px] mx-auto bg-main-white rounded-lg max-lg:max-w-[367px] lg:py-[16px] lg:px-[24px] max-w-[1576px]">
      <div className="flex justify-between items-center">
        <Link href="./">
          <Image
            src={logoMobile}
            alt="Mobile logo"
            width={67}
            height={28}
            className="lg:hidden"
            style={{ width: 67, height: 28 }}
            priority={true}
          />
          <Image
            src={logoDesktop}
            alt="Desktop logo"
            width={214}
            height={48}
            className="max-lg:hidden"
            style={{ width: 214, height: 48 }}
            priority={false}
          />
        </Link>

        <Local lng={lng} />
        <HeaderNav lng={lng} />
        <HeaderBtnList lng={lng} />
      </div>
    </header>
  );
};

export default Header;
