'use client';

import React from 'react';
import { logoMobile, logoDesktop } from '@/assets/icons/index';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="py-[8px] px-[12px] mx-auto bg-main-white rounded-lg max-md:max-w-[367px] md:py-[16px] md:px-[24px]">
      <Image
        src={isMobile ? logoMobile : logoDesktop}
        alt={isMobile ? 'Mobile logo' : 'Desktop logo'}
        width={isMobile ? 67 : 214}
        height={isMobile ? 28 : 48}
      />
    </header>
  );
};

export default Header;
