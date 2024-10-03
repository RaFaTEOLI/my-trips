import Image from 'next/image';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import * as S from './place.styles';
import { useRouter } from 'next/router';
import { LinkWrapper } from '@/presentation/components';

type ImageProps = {
  url: string;
  height?: number | null;
  width?: number | null;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    } | null;
    gallery: ImageProps[];
  };
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
