import { useTranslation } from '../../../i18n';
import { LocalBase } from './LocalBase';

export const Local = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'footer');
  return <LocalBase t={t} lng={lng} />;
};
