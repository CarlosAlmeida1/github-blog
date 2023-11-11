import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLinkContainer } from './styles';
import { ComponentProps, ReactNode } from 'react';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: 'inconLeft';
};

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </ExternalLinkContainer>
  );
}
