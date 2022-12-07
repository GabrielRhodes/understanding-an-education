import './index.scss'

export default function Preview({ mode, article }) {
  switch (mode) {
    case 'hoz':
      return (
        <a
          className='prev'
          href={`/understanding-an-education/?path=${article.link}`}
        >
          <div className='hoz-prev'>
            <img src={article.image}></img>
            <h3>{article.title}</h3>
            <p className='text-center'>{article.author}</p>
          </div>
        </a>
      )
    case 'vert':
      return (
        <a
          className='prev'
          href={`/understanding-an-education/?path=${article.link}`}
        >
          <div className='vert-prev'>
            <img src={article.image}></img>
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
          </div>
        </a>
      )
    case 'box':
      return (
        <a
          className='prev'
          href={`/understanding-an-education/?path=${article.link}`}
        >
          <div className='box-prev'>
            <img src={article.image}></img>
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
          </div>
        </a>
      )
    default:
      break
  }
  return <></>
}
