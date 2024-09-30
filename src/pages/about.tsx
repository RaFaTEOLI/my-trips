import { AboutPage } from '@/presentation/pages';
import client from '@/graphql/client';
import { GET_PAGES } from '@/graphql/queries';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type Page = {
  id: string;
  heading: string;
  slug: string;
  body: {
    html: string;
  };
};

export const getStaticProps = (async () => {
  const { pages } = await client.request<{ pages: Page[] }>(GET_PAGES);
  return { props: { pages } };
}) satisfies GetStaticProps<{
  pages: Page[];
}>;

export default function About({
  pages
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ pages });
  return <AboutPage />;
}
