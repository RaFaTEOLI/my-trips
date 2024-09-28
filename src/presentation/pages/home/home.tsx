import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/presentation/components/map/map'), {
  ssr: false
});

export default function Home() {
  const places = [
    {
      id: '1',
      name: 'Valinhos',
      slug: 'valinhos',
      location: {
        latitude: -22.9697,
        longitude: -46.9974
      }
    }
  ];

  return <Map places={places} />;
}
