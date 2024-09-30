import { useContext } from "react"
import { FeedContainer, PostCard } from "./styles"
import { BlogContext } from "../../contexts/BlogContext"
import Markdown from "react-markdown"

export function Feed() {
  const { posts } = useContext(BlogContext)

  function trimPostBody(str: string, limit: number) {
    if (str.length > limit) {
      return str.substring(0, limit) + "..."
    } else {
      return str
    }
  }

  return (
    <FeedContainer>
      {posts.map((post) => (
        <PostCard key={post.issueNumber}>
          <header>
            <h1>{post.title}</h1>
            <span>{post.createdAt}</span>
          </header>

          <Markdown>{trimPostBody(post.body, 150)}</Markdown>
        </PostCard>
      ))}
    </FeedContainer>
  )
}
