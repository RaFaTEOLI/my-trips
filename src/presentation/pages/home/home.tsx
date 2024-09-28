import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/presentation/components/map/map'), {
  ssr: false
});

export default function Home() {
  return <Map />;
}
