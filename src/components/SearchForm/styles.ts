import styled from "styled-components"

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4.5rem 0 1rem;

    h3 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  input {
    flex: 1;
    height: 50px;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors["base-input"]};
    color: ${({ theme }) => theme.colors["base-text"]};

    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 10px;

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
    }
  }
`
