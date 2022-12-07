import { Preview } from '../../components'
import './index.scss'
import articleData from '../../articles/articleData'

export default function Articles() {
  let query = new URLSearchParams(document.location.search).get('q')
  let results = articleData
  let recommended = [articleData[0]] //[articleData[0], articleData[2]]
  let rand = articleData[Math.floor(Math.random() * articleData.length)]
  return (
    <div>
      {query ? (
        <>
          <h1 id='page-title'>Results</h1>
          <div id='results'>
            <div className='hoz-prev'>
              <div></div>
              <em className='text-center'>Title</em>
              <em className='text-center'>Author</em>
            </div>
            {results.map((result) => (
              <Preview mode={'hoz'} article={result} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 id='page-title'>Articles</h1>
          <h2>Recent</h2>
          <ul>
            {results
              .sort((a, b) => {
                return a.date < b.date ? 1 : -1
              })
              .map((result) => (
                <li>
                  <Preview mode={'box'} article={result} />
                </li>
              ))}
          </ul>
          <h2>Recommended</h2>
          <ul>
            {recommended.map((result) => (
              <li>
                <Preview mode={'vert'} article={result} />
              </li>
            ))}
          </ul>
          <h2>Random</h2>
          <ul>
            <li>
              <Preview mode={'hoz'} article={rand} />
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
