import { LinkWrapper } from '@/presentation/components';
import { InfoOutline } from '@styled-icons/evaicons-outline';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/presentation/components/map/map'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  );
}
