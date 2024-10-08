import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from '@/presentation/components';
import * as S from './page.styles';

type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
);

export default PageTemplate;
