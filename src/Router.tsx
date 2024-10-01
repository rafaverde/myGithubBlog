import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { SinglePost } from "./pages/SinglePost"
import { DefaultLayout } from "./layouts/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<SinglePost />} />
      </Route>
    </Routes>
  )
}
