import { useForm } from "react-hook-form"
import * as z from "zod"

import { SearchFormContainer } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { BlogContext } from "../../contexts/BlogContext"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts } = useContext(BlogContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchFeed(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchFeed)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
