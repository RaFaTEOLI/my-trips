import client from '@/graphql/client';
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from '@/graphql/generated/graphql';
import { GET_PLACE_BY_SLUG, GET_PLACES } from '@/graphql/queries';
import { PlaceTemplate } from '@/presentation/pages';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

export default function Place({
  place
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PlaceTemplate place={place} />;
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps = (async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    props: { place }
  };
}) satisfies GetStaticProps<{
  place: GetPlaceBySlugQuery['place'];
}>;
