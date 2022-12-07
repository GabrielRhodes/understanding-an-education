import { Nav } from './components/index'
import { Home, Mission, Article, Articles } from './screens'
import './index.scss'

export default function App() {
  let path = new URLSearchParams(document.location.search).get('path')
  let routes = ['/home', '/mission', '/articles']
  let screens = [<Home />, <Mission />, <Articles />]
  let content
  if (routes.includes(path) || /article\/[\s\S]+/.test(path)) {
    content = screens[routes.indexOf(path)] || <Article link={path} />
  } else {
    content = <Home />
  }
  return (
    <div>
      <Nav />
      {content}
    </div>
  )
}
