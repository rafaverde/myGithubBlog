import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { BlogProvider } from "./contexts/BlogContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
