import { LinkWrapper } from '@/presentation/components';
import { MapProps } from '@/presentation/components/map/map';
import { InfoOutline } from '@styled-icons/evaicons-outline';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/presentation/components/map/map'), {
  ssr: false
});

export default function Home({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
