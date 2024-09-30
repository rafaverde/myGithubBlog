import { HeaderContainer } from "./styles"

import logo from "../../assets/githubBlog-logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
