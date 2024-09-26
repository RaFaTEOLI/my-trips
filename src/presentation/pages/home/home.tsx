import * as S from '@/presentation/pages/home/home.styles';

export default function Home({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" alt="Logo Next.js" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/coding.svg"
        alt="A developer using a computer."
      />
    </S.Wrapper>
  );
}
