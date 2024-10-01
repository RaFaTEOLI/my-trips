import client from '@/graphql/client';
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql';
import { GET_PAGE_BY_SLUG, GET_PAGES } from '@/graphql/queries';
import { PageTemplate } from '@/presentation/pages';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/dist/client/router';

export default function Page({
  heading,
  body
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps = (async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
}) satisfies GetStaticProps<{
  heading: string;
  body: string;
}>;
