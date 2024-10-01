import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Post } from "./pages/Post"
import { DefaultLayout } from "./layouts/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
