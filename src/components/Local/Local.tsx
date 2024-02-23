'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useTranslation } from '@/app/i18n/client';
import { flagMobile, flagDesktop, closeLocal } from '@/assets/icons/index';

const languageArr = ['UA', 'EN', 'DE'];

export interface LocalProps {
  lng: string;
}

const Local = ({ lng }: LocalProps) => {
  const { t } = useTranslation(lng);

  return (
    <div className="flex items-center justify-between max-w-[75px] lg:max-w-[102px] w-full">
      <Image src={flagMobile} alt="flag" width={16} height={16} className="lg:hidden" />
      <Image src={flagDesktop} alt="flag" width={20} height={16} className="max-lg:hidden" />
      <p className="text-xs lg:text-sm">{t('city')}</p>
      <Popover className="relative flex">
        <Popover.Button className="text-xs lg:text-sm w-[24px]">{lng.toUpperCase()}</Popover.Button>

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
                  <Image
                    src={closeLocal}
                    alt="close icon"
                    width={24}
                    height={24}
                    style={{ width: 24, height: 24 }}
                  />
                </Popover.Button>

                <p className="text-menu-gray mb-[14px]">{t('choose-language')}</p>
                <ul className="flex gap-[12px] flex-wrap">
                  {languageArr.map(lang => {
                    return (
                      <li key={lang}>
                        <Link href={`/${lang.toLowerCase()}`}>{lang}</Link>

                        {/* <button
                          type="button"
                          className="p-[12px] bg-local-gray rounded-xl w-[93px]"
                          onClick={() => setLanguage(lang)}
                        >
                          {lang}
                        </button> */}
                      </li>
                    );
                  })}
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
