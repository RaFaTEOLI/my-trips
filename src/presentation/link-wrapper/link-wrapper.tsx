import Link from 'next/link';
import * as S from './link-wrapper.styles';

type Props = {
  href: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ href, children }: Props) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
);

export default LinkWrapper;
