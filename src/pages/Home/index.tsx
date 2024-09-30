import { Feed } from "../../components/Feed"
import { ProfileBox } from "../../components/ProfileBox"
import { SearchForm } from "../../components/SearchForm"
import { HomeContainer } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <ProfileBox />
      <SearchForm />

      <Feed />
    </HomeContainer>
  )
}
