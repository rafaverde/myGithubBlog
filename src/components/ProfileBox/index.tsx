import { useEffect, useState } from "react"
import { InfoContainer, ProfileContainer } from "./styles"
import { api } from "../../lib/axios"
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

interface User {
  id: number
  avatar_url: string
  login: string
  name: string
  bio: string
  company: string
  html_url: string
  followers: number
}

export function ProfileBox() {
  const [user, setUser] = useState<User>()

  async function fetchUser() {
    const { data } = await api.get("users/rafaverde")
    const actualUser: User = {
      id: data.id,
      avatar_url: data.avatar_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
      company: data.company,
      html_url: data.html_url,
      followers: data.followers,
    }
    setUser(actualUser)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <InfoContainer>
        {user?.html_url && (
          <NavLink to={user?.html_url} target="_blank">
            <span>
              Github <ArrowSquareOut size={16} weight="bold" />
            </span>
          </NavLink>
        )}
        <h2>{user?.name}</h2>
        <p>{user?.bio}</p>

        <ul>
          <li>
            <GithubLogo size={18} weight="fill" />
            {user?.login}
          </li>
          <li>
            <Building size={18} weight="fill" />
            {user?.company}
          </li>
          <li>
            <Users size={18} weight="fill" />
            {user?.followers}
          </li>
        </ul>
      </InfoContainer>
    </ProfileContainer>
  )
}
