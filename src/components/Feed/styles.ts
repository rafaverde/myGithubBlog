import styled from "styled-components"

export const FeedContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;

  list-style: none;
`

export const PostCard = styled.li`
  width: 48%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-post"]};

  border-radius: 10px;
  border: 2px solid transparent;

  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors["base-label"]};
  }

  header {
    display: flex;
    margin-bottom: 1.25rem;

    h1 {
      max-width: 75%;
      font-size: 1.25rem;
    }

    span {
      flex: 1;
      text-align: right;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors["base-span"]};
    }
  }

  p {
    margin-bottom: 0.7rem;
    overflow-wrap: break-word;
  }

  pre {
    font-size: small;
    overflow-x: scroll;
  }
`
