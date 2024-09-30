import styled from "styled-components"

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
`

export const PostHeader = styled.header`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-profile"]};

  nav {
    margin-bottom: 1.25rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 5px;

        font-size: 0.75rem;
        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 1px solid transparent;
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;

    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }
`

export const PostContent = styled.article`
  padding: 2.5rem 2rem;

  div {
    padding: 2rem;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors["base-post"]};
  }
`
