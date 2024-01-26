'use client';

import React from 'react';
import { flagMobile, flagDesktop, closeLocal } from '@/assets/icons/index';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const Local = () => {
  const isMobile = useMediaQuery({ maxWidth: 1575 });

  return (
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
          <Popover.Panel className="absolute left-1/2 z-10 max-lg:mt-10 mt-16 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-[238px] flex-auto overflow-hidden rounded-3xl bg-white text-sm">
              <div className="p-[20px] bg-main-white rounded-xl">
                <Popover.Button className="absolute right-8 top-[15px] rounded-lg bg-local-gray p-[4px]">
                  <Image src={closeLocal} alt="close icon" width={24} height={24} />
                </Popover.Button>

                <p className="text-menu-gray mb-[14px]">Виберіть мову</p>
                <ul className="flex gap-[12px] flex-wrap">
                  <li>
                    <button type="button" className="p-[12px] bg-local-gray rounded-xl w-[93px]">
                      UA
                    </button>
                  </li>
                  <li>
                    <button type="button" className="p-[12px] bg-local-gray rounded-xl w-[93px]">
                      EN
                    </button>
                  </li>
                  <li>
                    <button type="button" className="p-[12px] bg-local-gray rounded-xl w-[93px]">
                      DE
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Local;
