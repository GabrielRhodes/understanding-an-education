import { Preview } from '../../components'
import articleData from '../../articles/articleData'
import './index.scss'

export default function Home() {
  let results = articleData
  return (
    <div>
      <section>
        {results
          .sort((a, b) => {
            return a.date < b.date ? 1 : -1
          })
          .map((result) => (
            <li>
              <Preview mode={'box'} article={result} />
            </li>
          ))}
        <h3>Want To Contribute?</h3>
      </section>
    </div>
  )
}
