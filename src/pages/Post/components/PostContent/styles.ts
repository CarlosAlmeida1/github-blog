import styled from 'styled-components';

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  gap: 1rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['blue']};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', sans-serif !important;
        line-height: 160% !important;
      }
    }
  }
`;
