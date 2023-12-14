import styled from 'styled-components';

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    flex-wrap: wrap;

    li {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-text']};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 19px;
    }
  }
`;
