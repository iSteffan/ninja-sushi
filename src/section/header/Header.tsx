'use client';

import React from 'react';
import { logoMobile, logoDesktop, flagMobile, flagDesktop } from '@/assets/icons/index';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import HeaderBtnList from '@/components/HeaderBtnList/HeaderBtnList';
import HeaderNav from '@/components/HeaderNav/HeaderNav';

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

        <div className="flex items-center justify-between max-w-[75px] lg:max-w-[102px] w-full">
          <Image
            src={isMobile ? flagMobile : flagDesktop}
            alt="flag"
            width={isMobile ? 16 : 20}
            height={isMobile ? 16 : 16}
          />
          <p className="text-xs lg:text-sm">Київ</p>
          <Popover className="relative flex">
            <Popover.Button className="text-xs lg:text-sm">UA</Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4"></div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <HeaderNav />
        <HeaderBtnList />
      </div>
    </header>
  );
};

export default Header;
