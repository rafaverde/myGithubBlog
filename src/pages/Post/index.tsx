import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react"
import { PostContainer, PostContent, PostHeader } from "./styles"
import { NavLink } from "react-router-dom"

export function Post() {
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
            <li>
              Ver no Github <ArrowSquareOut size={16} weight="bold" />
            </li>
          </ul>
        </nav>

        <h1>JavaScript data types and data structures</h1>

        <ul>
          <li>
            <GithubLogo size={18} weight="fill" />
            rafaverde
          </li>
          <li>
            <Calendar size={18} weight="fill" />
            Há 1 dia
          </li>
          <li>
            <ChatCircle size={18} weight="fill" />2
          </li>
        </ul>
      </PostHeader>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language.
          Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <div>
          <code lang="javascript">
            let foo = 42; // foo is now a number <br />
            foo = ‘bar’; // foo is now a string <br />
            foo = true; // foo is now a boolean
          </code>
        </div>
      </PostContent>
    </PostContainer>
  )
}
