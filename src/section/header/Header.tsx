'use client';

import React from 'react';
import { logoMobile, logoDesktop } from '@/assets/icons/index';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import HeaderBtnList from '@/components/HeaderBtnList/HeaderBtnList';
import HeaderNav from '@/components/HeaderNav/HeaderNav';
import Local from '@/components/Local/Local';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1575 });

  return (
    <header className="py-[8px] px-[12px] mx-auto bg-main-white rounded-lg max-lg:max-w-[367px] lg:py-[16px] lg:px-[24px] max-w-[1576px]">
      <div className="flex justify-between">
        <Image
          src={isMobile ? logoMobile : logoDesktop}
          alt={isMobile ? 'Mobile logo' : 'Desktop logo'}
          width={isMobile ? 67 : 214}
          height={isMobile ? 28 : 48}
        />
        <Local />
        <HeaderNav />
        <HeaderBtnList />
      </div>
    </header>
  );
};

export default Header;
