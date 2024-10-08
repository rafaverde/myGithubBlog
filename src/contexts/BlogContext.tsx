import { ReactNode, useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { createContext } from "use-context-selector"

export interface Post {
  number: number
  url: string
  title: string
  login: string
  created_at: string
  comments: number
  body: string
}

interface BlogContextType {
  posts: Post[]
  fetchPosts: (query?: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const { data } = await api.get("search/issues", {
      params: {
        q: query
          ? `${query} repo:rafaverde/myGithubBlog`
          : "repo:rafaverde/myGithubBlog",
      },
    })

    setPosts(data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <BlogContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
