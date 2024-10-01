import styled from "styled-components"
import headerBg from "../../assets/header-background.jpg"

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 0 8.375rem;
  display: flex;
  justify-content: center;
  margin-bottom: -5rem;

  background: url(${headerBg}) center;
  background-size: cover;
`
