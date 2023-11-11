import styled from 'styled-components';

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      line-height: 130%;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;
