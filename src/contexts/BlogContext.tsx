import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Post {
  issueNumber: number
  url: string
  title: string
  userLogin: string
  createdAt: string
  comments: number
  body: string
}

interface BlogContextType {
  posts: Post[]
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  async function loadPosts() {
    const { data } = await api.get(
      "/search/issues?q=%20repo:rafaverde/myGithubBlog"
    )

    setPosts(data.items)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <BlogContext.Provider value={{ posts }}>{children}</BlogContext.Provider>
  )
}
