import { phone } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';

const HeaderNav = () => {
  return (
    <nav className="max-lg:hidden flex items-center max-w-[644px] w-full">
      <ul className="flex justify-between w-full">
        <li>
          <Link href="/" className="text-sm">
            Головна
          </Link>
        </li>
        <li>
          <Link href="/delivery" className="text-sm">
            Доставка
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="text-sm">
            Про нас
          </Link>
        </li>
        <li>
          <Link href="/news" className="text-sm">
            Новини
          </Link>
        </li>
        <li>
          <a href="tel:+380976993438" className="text-sm flex gap-[12px]">
            <Image src={phone} alt="phone" width={24} height={24} />
            +38 097 699 34 38
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
