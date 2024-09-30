import { SearchFormContainer } from "./styles"

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
