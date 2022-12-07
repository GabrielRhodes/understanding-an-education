import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Nav() {
  const [search, setSearch] = useState('')
  return (
    <>
      <nav>
        <a className='nav-button' href='/understanding-an-education/'>
          <h3>Understanding an Education</h3>
        </a>
        <div id='nav-options'>
          <a
            className='nav-button'
            href='/understanding-an-education/?path=/home'
          >
            Home
          </a>
          <a
            className='nav-button'
            href='/understanding-an-education/?path=/mission'
          >
            Mission
          </a>
          <a
            className='nav-button'
            href='/understanding-an-education/?path=/articles'
          >
            Articles
          </a>
        </div>
        <div id='nav-controls'>
          <div></div>
          <input
            id='search-bar'
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                document.getElementById('link').click()
              }
            }}
          ></input>
          <a
            id='link'
            href={`/understanding-an-education/?path=/articles&q=${search}`}
          >
            <FontAwesomeIcon
              icon={solid('magnifying-glass')}
              className={'click'}
            />
          </a>
        </div>
      </nav>
      <hr />
    </>
  )
}
