import { useTranslation } from '../i18n';

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);

  return (
    <main className="max-w-[1576px]">
      <h1></h1>
    </main>
  );
}
