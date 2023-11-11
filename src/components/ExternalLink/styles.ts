import styled from 'styled-components';

interface ExternalLinkProps {
  variant?: 'inconLeft';
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  border: none;
  background: none;
  color: ${(props) => props.theme['blue']};
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 19px;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  text-decoration: none;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${(props) => props.theme['blue']};
  }

  ${({ variant }) =>
    variant === 'inconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`;
