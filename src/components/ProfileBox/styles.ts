import styled from "styled-components"

export const ProfileContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${({ theme }) => theme.colors["base-profile"]};

  border-radius: 10px;

  img {
    width: 148px;
    border-radius: 999px;
  }
`

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;

  span {
    position: absolute;
    top: 0px;
    right: 0px;

    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 0.8rem;
    line-height: 0;

    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      svg {
        color: ${({ theme }) => theme.colors["base-label"]};
      }
    }
  }
`
