import styled from 'styled-components';

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    display: flex;
    width: 100%;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    transition: 0.3s;

    &:focus {
      border-color: ${(props) => props.theme['blue']};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
