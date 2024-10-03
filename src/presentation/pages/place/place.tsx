import Image from 'next/image';

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
  return (
    <>
      <h1>{place.name}</h1>
      {!!place.description?.html && (
        <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      )}
      {place.gallery.map((image, index) => (
        <Image key={`photo-${index}`} src={image.url} alt={place.name} />
      ))}
    </>
  );
}
