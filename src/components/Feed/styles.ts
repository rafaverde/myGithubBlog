import styled from "styled-components"

export const FeedContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  list-style: none;
`

export const PostCard = styled.li`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-post"]};

  border-radius: 10px;

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
`
