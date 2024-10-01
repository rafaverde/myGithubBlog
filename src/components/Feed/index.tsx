import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { FeedContainer, PostCard } from "./styles"
import { BlogContext } from "../../contexts/BlogContext"

import Markdown from "react-markdown"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function Feed() {
  const { posts } = useContext(BlogContext)
  const navigate = useNavigate()

  function trimPostBody(str: string, limit: number) {
    if (str.length > limit) {
      return str.substring(0, limit) + "..."
    } else {
      return str
    }
  }

  function handlePostNavigate(issuNumber: number) {
    navigate(`/post/${issuNumber}`)
  }

  return (
    <FeedContainer>
      {posts.map((post) => (
        <PostCard
          key={post.number}
          onClick={() => handlePostNavigate(post.number)}
        >
          <header>
            <h1>{post.title}</h1>
            <span>
              {formatDistanceToNow(post.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </header>

          <Markdown>{trimPostBody(post.body, 150)}</Markdown>
        </PostCard>
      ))}
    </FeedContainer>
  )
}
