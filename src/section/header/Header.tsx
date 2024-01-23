'use client';

import React from 'react';
import { logoMobile, logoDesktop, flagMobile, flagDesktop } from '@/assets/icons/index';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import HeaderBtnList from '@/components/HeaderBtnList/HeaderBtnList';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="py-[8px] px-[12px] mx-auto bg-main-white rounded-lg max-md:max-w-[367px] md:py-[16px] md:px-[24px]">
      <div className="flex justify-between">
        <Image
          src={isMobile ? logoMobile : logoDesktop}
          alt={isMobile ? 'Mobile logo' : 'Desktop logo'}
          width={isMobile ? 67 : 214}
          height={isMobile ? 28 : 48}
        />

        <div className="flex items-center">
          <Image
            src={isMobile ? flagMobile : flagDesktop}
            alt="flag"
            width={isMobile ? 16 : 20}
            height={isMobile ? 16 : 16}
          />
          <p className="text-xs ml-[8px] mr-[12px]">Київ</p>
          <Popover className="relative flex">
            <Popover.Button className="text-xs">UA</Popover.Button>

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

        <HeaderBtnList />
      </div>
    </header>
  );
};

export default Header;
