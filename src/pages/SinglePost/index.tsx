import { NavLink, useParams } from "react-router-dom"

import {
  ArrowSquareOut,
  CalendarDots,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react"

import { PostContainer, PostContent, PostHeader } from "./styles"

import { api } from "../../lib/axios"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

interface SinglePost {
  id: number
  html_url: string
  comments: number
  title: string
  body: string
  created_at: string
  user: {
    login: string
  }
}

export function SinglePost() {
  const { issueNumber } = useParams()
  const [singlePost, setSinglePost] = useState<SinglePost>()

  async function fetchPost() {
    const { data } = await api.get(
      `/repos/rafaverde/mygithubblog/issues/${issueNumber}`
    )

    setSinglePost(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostHeader>
        <nav>
          <ul>
            <NavLink to={"/"}>
              <li>
                <CaretLeft size={16} />
                Voltar
              </li>
            </NavLink>
            {singlePost?.html_url && (
              <NavLink to={singlePost.html_url} target="_blank">
                <li>
                  Ver no Github <ArrowSquareOut size={16} weight="bold" />
                </li>
              </NavLink>
            )}
          </ul>
        </nav>

        <h1>{singlePost?.title}</h1>

        <ul>
          <li>
            <GithubLogo size={18} weight="fill" />
            {singlePost?.user.login}
          </li>
          {singlePost?.created_at && (
            <li>
              <CalendarDots size={18} weight="fill" />
              {formatDistanceToNow(singlePost.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </li>
          )}
          <li>
            <ChatCircle size={18} weight="fill" />
            {singlePost?.comments}
          </li>
        </ul>
      </PostHeader>

      <PostContent>
        <Markdown>{singlePost?.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
