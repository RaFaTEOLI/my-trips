import client from '@/graphql/client';
import { GetPlacesQuery } from '@/graphql/generated/graphql';
import { GET_PLACES } from '@/graphql/queries';
import { HomePage } from '@/presentation/pages';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Home({
  places
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage places={places} />;
}

export const getStaticProps = (async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    props: {
      places
    }
  };
}) satisfies GetStaticProps<GetPlacesQuery>;
