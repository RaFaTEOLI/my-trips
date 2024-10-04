import { LinkWrapper } from '@/presentation/components';
import { MapProps } from '@/presentation/components/map/map';
import { InfoOutline } from '@styled-icons/evaicons-outline';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/presentation/components/map/map'), {
  ssr: false
});

export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        openGraph={{
          title: 'My Trips',
          description:
            'A simple project to show the places I have visited in the world.',
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
