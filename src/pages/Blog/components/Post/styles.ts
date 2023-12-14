import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: 0.3s;
  gap: 1rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: 1.23rem;
      color: ${(props) => props.theme['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    span {
      width: max-content;
      font-size: 1rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  color: ${(props) => props.theme['base-text']};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.theme['base-text']};
  }
`;
