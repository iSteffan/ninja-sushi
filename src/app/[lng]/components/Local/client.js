'use client';

import { LocalBase } from './LocalBase';
import { useTranslation } from '../../../i18n/client';

export const Local = ({ lng }) => {
  const { t } = useTranslation(lng);
  return <LocalBase t={t} lng={lng} />;
};
